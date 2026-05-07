#!/usr/bin/env python3
"""Analyze GSC data — intent buckets, performance tiers, cannibalization."""
import json, re, csv
from collections import defaultdict

GSC = "/sessions/dazzling-dreamy-maxwell/mnt/outputs/gsc_data"
queries   = json.load(open(f"{GSC}/queries.json"))
pages     = json.load(open(f"{GSC}/pages.json"))
query_page= json.load(open(f"{GSC}/query_page.json"))

# --- clean row helper ---
def row(r, i=0):
    return {
        "key": r["keys"][i] if len(r["keys"])>i else "",
        "clicks": r.get("clicks",0),
        "impressions": r.get("impressions",0),
        "ctr": r.get("ctr",0)*100,
        "position": r.get("position",0),
    }

# Queries
q_rows = []
for r in queries:
    d = row(r)
    d["query"] = d.pop("key")
    q_rows.append(d)

# Sort
q_rows.sort(key=lambda r: -r["impressions"])

# --- Intent classifier ---
ACTION_PATTERNS = [
    r"\bsend\b", r"\bfile\b", r"\bapply\b", r"\bregister\b", r"\bregistration\b",
    r"\bdraft\b", r"\bonline\b", r"\bservice(s)?\b", r"\bnear me\b",
    r"\bhire\b", r"\bconsult\b", r"\bconsultation\b", r"\blawyer\b",
    r"\badvocate\b", r"\battorney\b", r"\btalk to\b", r"\bvakil\b",
    r"\bprice\b", r"\bfee(s)?\b", r"\bcost\b", r"\bcharge(s)?\b",
    r"\bbuy\b", r"\bdownload\b",
]
DECISION_PATTERNS = [
    r"\bbest\b", r"\btop\b", r"\bvs\b", r"\bversus\b", r"\bcompare\b",
    r"\bwhich\b", r"\bhow to choose\b", r"\bdifference between\b",
    r"\breview(s)?\b", r"\bvakiltech\b", r"\bonline legal (help|service)",
    r"\bformat\b", r"\bsample\b", r"\btemplate\b",
]
AWARENESS_PATTERNS = [
    r"^what ", r"^why ", r"^when ", r"^who ", r"^how (does|is|do|can|to) ",
    r"\bmeaning\b", r"\bexplained\b", r"\bdefinition\b", r"\bsection \d",
    r"\bipc\b", r"\bbns\b", r"\bact\b", r"\bin india\b",
    r"\btime limit\b", r"\brights\b", r"\bwhat is\b",
]
# action > decision > awareness (more specific first)
def classify(q):
    q = q.lower()
    for p in ACTION_PATTERNS:
        if re.search(p, q):
            return "Action"
    for p in DECISION_PATTERNS:
        if re.search(p, q):
            return "Decision"
    for p in AWARENESS_PATTERNS:
        if re.search(p, q):
            return "Awareness"
    return "Unclassified"

# --- Legal-intent filter (ignore brand/navigational noise not relevant) ---
LEGAL_SIGNALS = [
    "legal", "notice", "lawyer", "advocate", "attorney", "vakil",
    "court", "case", "petition", "affidavit", "agreement",
    "consultation", "consult", "divorce", "eviction", "cheque bounce",
    "money recovery", "recovery", "property", "tenant", "landlord",
    "builder", "defamation", "harassment", "termination", "salary",
    "custody", "maintenance", "partition", "breach", "consumer",
    "domestic violence", "ipc", "bns", "section ", "act ", "fir",
    "gst", "itr", "fssai", "trade license", "draft", "agreement",
    "nda", "mou", "contract", "rental", "rent ", "complaint",
    "refund", "dispute", "law ", "laws ", "legal help", "legal advice",
    "cruelty", "desertion", "possession", "arrears", "outstanding",
    "bank loan", "loan settlement", "amenities", "society",
    "workplace", "employee", "employment", "unpaid", "wrongful",
    "zomato", "swiggy", "flipkart", "amazon", "myntra", "meesho",
    "blinkit", "zepto", "bigbasket", "dunzo", "rapido", "ola",
    "uber", "makemytrip", "irctc", "paytm", "phonepe", "cred",
    "urban company", "byjus", "unacademy", "snapdeal", "nykaa",
    "tata cliq",
]
def is_legal(q):
    q = q.lower()
    return any(s in q for s in LEGAL_SIGNALS)

# Classify & filter
for r in q_rows:
    r["intent"] = classify(r["query"])
    r["legal"] = is_legal(r["query"])

legal_rows = [r for r in q_rows if r["legal"]]
print(f"Total queries: {len(q_rows):,}")
print(f"Legal-intent queries: {len(legal_rows):,}")
print(f"Non-legal (filtered out): {len(q_rows)-len(legal_rows):,}")
print()

# Intent distribution (legal only)
from collections import Counter
intent_ct = Counter(r["intent"] for r in legal_rows)
print("Intent distribution (legal queries):")
for k,v in intent_ct.most_common():
    subset = [r for r in legal_rows if r["intent"]==k]
    clicks = sum(r["clicks"] for r in subset)
    imps = sum(r["impressions"] for r in subset)
    print(f"  {k:<14} queries={v:<5} clicks={clicks:<6} impressions={imps:,}")
print()

# Top 30 by impressions (opportunities)
print("=== TOP 30 LEGAL QUERIES BY IMPRESSIONS ===")
print(f"{'Intent':<13} {'Imp':>6} {'Clk':>4} {'CTR%':>5} {'Pos':>5}  Query")
for r in legal_rows[:30]:
    print(f"{r['intent']:<13} {r['impressions']:>6} {r['clicks']:>4} {r['ctr']:>5.1f} {r['position']:>5.1f}  {r['query']}")

# Top 30 by clicks
print()
print("=== TOP 30 LEGAL QUERIES BY CLICKS ===")
clk = sorted(legal_rows, key=lambda r: -r["clicks"])[:30]
for r in clk:
    print(f"{r['intent']:<13} {r['impressions']:>6} {r['clicks']:>4} {r['ctr']:>5.1f} {r['position']:>5.1f}  {r['query']}")

# Save filtered CSV
with open(f"{GSC}/legal_queries.csv","w",newline="") as f:
    w = csv.DictWriter(f, fieldnames=["query","intent","clicks","impressions","ctr","position"])
    w.writeheader()
    for r in legal_rows:
        w.writerow({k:r[k] for k in ["query","intent","clicks","impressions","ctr","position"]})
print(f"\nSaved → {GSC}/legal_queries.csv")
