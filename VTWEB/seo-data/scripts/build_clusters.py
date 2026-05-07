#!/usr/bin/env python3
"""Build intent-clustered keyword buckets merging GSC + SEMRUSH gap data."""
import json, csv, re
from collections import defaultdict

GSC = "/sessions/dazzling-dreamy-maxwell/mnt/outputs/gsc_data"
SR  = "/sessions/dazzling-dreamy-maxwell/mnt/outputs/semrush"

# ---- Load GSC legal queries
gsc = []
with open(f"{GSC}/legal_queries.csv") as f:
    for r in csv.DictReader(f):
        r["impressions"]=int(r["impressions"]); r["clicks"]=int(r["clicks"])
        r["ctr"]=float(r["ctr"]); r["position"]=float(r["position"])
        gsc.append(r)

# ---- Load SEMRUSH gap keywords
sr_gap = []
with open(f"{SR}/gap_data.csv") as f:
    rdr = csv.reader(f)
    for row in rdr:
        if not row or row[0].startswith("#") or row[0]=="keyword": continue
        sr_gap.append({"keyword":row[0],"volume":int(row[1]),"kd":int(row[2]),"ranks":row[4]})

# ---- Intent classifier v2 with business-value filter ----
# Rules (most specific wins):

# HIGH-VALUE ACTION (conversion / service intent — ready to buy)
ACTION_STRONG = [
    r"\bsend (a )?legal notice\b", r"\blegal notice (online|service|by advocate)",
    r"\blegal notice charges\b", r"\blegal notice cost\b", r"\blegal notice fees?\b",
    r"\bonline legal notice\b", r"\bonline lawyer consultation\b",
    r"\b(online|lawyer) consultation\b", r"\btalk to (a )?lawyer\b",
    r"\bhire (a |an )?(lawyer|advocate)\b", r"\badvocate near me\b",
    r"\blawyer(s)? near me\b", r"\bvakil near me\b", r"\bfind a lawyer\b",
    r"\blegal services? near me\b", r"\bvakil (contact )?number\b",
    r"\blegal advocate near me\b", r"\b(cheque bounce|money recovery|rent arrears|eviction|divorce|defamation|maintenance|custody|partition|harassment) (case|notice|online)\b",
    r"\b(apply|file|register|download) (for |a )?(gst|fssai|itr|trade license|divorce|rent agreement|rental agreement|agreement|nda|affidavit|power of attorney)\b",
    r"\b(gst|fssai|itr|trade license|mca|dsc) (apply|registration|online)\b",
    r"\b(rent|rental) agreement online\b", r"\brental agreement near me\b",
    r"\blegal drafts bundle\b", r"\blegal templates india\b",
]

# DECISION (comparison, format, sample, how-to choose, cost/options)
DECISION_STRONG = [
    r"\blegal notice format\b", r"\b(notice|agreement|petition|affidavit) format\b",
    r"\b(sample|template|draft) (legal|notice|agreement|format)\b",
    r"\bhow to send (a )?legal notice\b", r"\bhow to (apply|file|get) (for )?(divorce|mutual divorce)\b",
    r"\bhow to file a case\b", r"\bprocedure for\b", r"\bprocedure to (file|apply|take)\b",
    r"\bsteps (to|of) divorce\b", r"\bbest lawyer\b", r"\btop (lawyer|advocate)\b",
    r"\bfamous lawyer\b", r"\bdivorce procedure\b", r"\bdivorce process\b",
    r"\blegal notice time limit\b", r"\blegal notice reply format\b",
    r"\bhow to reply\b", r"\b(difference|vs)\b",
    r"\bwhat happens (if|after)\b", r"\bwhen to send\b",
]

# AWARENESS (info intent — understanding the concept, law sections, rights)
AWARENESS_STRONG = [
    r"^what is\b", r"^what are\b", r"^why\b", r"^when\b", r"\bmeaning\b",
    r"\bsection \d", r"^\d{3} (ipc|bns)\b", r"\b(ipc|bns) \d{3}\b",
    r"\bunder (ipc|bns)\b", r"\b(defamation|domestic violence|partition|cruelty|desertion) (in|under) (ipc|bns)",
    r"\bconsumer rights\b", r"\blaws? (in india|about)\b",
    r"\brights\b", r"\bposh act\b", r"\b(article|section) \d+\b",
    r"\blok adalat\b", r"\bvakalat\b", r"\bvakalatnama\b",
    r"\bdivorce rate\b", r"\bcauses of divorce\b", r"\bdivorce statistics\b",
    r"\b(explained|definition)\b", r"\blegal services authorities act\b",
]

def classify(q):
    ql = q.lower().strip()
    for p in ACTION_STRONG:
        if re.search(p, ql): return "Action"
    for p in DECISION_STRONG:
        if re.search(p, ql): return "Decision"
    for p in AWARENESS_STRONG:
        if re.search(p, ql): return "Awareness"
    # Secondary heuristics
    if re.search(r"\b(near me|cost|price|charge|fee|service|online)\b", ql): return "Action"
    if re.search(r"\b(format|sample|template|best|top|vs|compare|how to|why to|when to)\b", ql): return "Decision"
    if re.search(r"^(how|what|why|when|who)\b", ql): return "Awareness"
    return "Unclassified"

# ---- Pillar / theme mapper (topical clustering within intent) ----
PILLARS = [
    ("Legal Notice — Money Recovery",    [r"money recovery", r"recovery of money", r"recovery notice",
                                          r"unpaid salary", r"outstanding payment", r"non[- ]payment",
                                          r"not returning money", r"demand notice"]),
    ("Legal Notice — Cheque Bounce",     [r"cheque bounce", r"bounced check", r"138"]),
    ("Legal Notice — Property/Landlord", [r"eviction", r"tenant", r"builder", r"possession",
                                          r"rent arrears", r"property partition", r"amenities",
                                          r"society"]),
    ("Legal Notice — Family (Divorce)",  [r"divorce", r"cruelty", r"desertion", r"mutual consent",
                                          r"maintenance", r"child custody", r"first motion",
                                          r"domestic violence"]),
    ("Legal Notice — Defamation (BNS 356)", [r"defamation", r"356 bns", r"bns 356", r"section 356 bns",
                                             r"criminal defamation"]),
    ("Legal Notice — Employment",        [r"workplace harassment", r"wrongful termination",
                                          r"unpaid salary", r"employee misconduct", r"posh",
                                          r"salary"]),
    ("Legal Notice — Consumer",          [r"consumer complaint", r"consumer rights",
                                          r"consumer court", r"defective goods"]),
    ("Legal Notice — Generic",           [r"^legal notice$", r"send legal notice",
                                          r"online legal notice", r"legal notice online",
                                          r"legal notice by advocate", r"legal notice format",
                                          r"legal notice charges", r"legal notice cost",
                                          r"legal notice fees", r"legal notice time limit",
                                          r"legal notice reply"]),
    ("Lawyer Directory / Consultation",  [r"near me", r"vakil", r"advocate", r"lawyer",
                                          r"find a lawyer", r"legal consultation",
                                          r"lawyer consultation", r"talk to lawyer",
                                          r"vakeel"]),
    ("Agreement & Document Drafting",    [r"rent agreement", r"rental agreement", r"partnership deed",
                                          r"power of attorney", r"poa", r"nda", r"affidavit",
                                          r"leave and license", r"stamp paper", r"estamp",
                                          r"e stamp", r"agreement format", r"house rental agreement"]),
    ("Business Compliance",              [r"gst", r"fssai", r"itr", r"trade license", r"trademark",
                                          r"llp", r"mca", r"udyam", r"dsc", r"company name"]),
    ("IPC/BNS & Law Explainers",         [r"ipc", r"bns", r"section \d", r"article \d",
                                          r"ipc punishment", r"attempt to murder",
                                          r"dakhil kharij", r"lok adalat", r"show cause",
                                          r"mutation of property", r"land mutation"]),
    ("Government/Admin Documents",       [r"bonafide", r"gap certificate", r"marriage registration",
                                          r"police verification", r"voter id", r"aadhar",
                                          r"voter card", r"birth certificate", r"name change"]),
]

def pillar_of(q):
    ql = q.lower()
    for name, pats in PILLARS:
        for p in pats:
            if re.search(p, ql): return name
    return "Other"

# Annotate GSC
for r in gsc:
    r["intent_v2"] = classify(r["query"])
    r["pillar"] = pillar_of(r["query"])

# Focus on GSC queries with ≥50 impressions OR ≥3 clicks (signal threshold)
gsc_sig = [r for r in gsc if r["impressions"]>=50 or r["clicks"]>=3]

# Annotate SEMRUSH
for r in sr_gap:
    r["intent_v2"] = classify(r["keyword"])
    r["pillar"] = pillar_of(r["keyword"])

# ==== SUMMARIES BY PILLAR x INTENT ====
print("=" * 80)
print("GSC — legal queries with signal (≥50 imp OR ≥3 clicks), by Pillar x Intent")
print("=" * 80)
pi = defaultdict(lambda: {"queries":0,"clicks":0,"imps":0})
for r in gsc_sig:
    k = (r["pillar"], r["intent_v2"])
    pi[k]["queries"] += 1
    pi[k]["clicks"] += r["clicks"]
    pi[k]["imps"] += r["impressions"]

# Grouped print
by_pillar = defaultdict(list)
for (p,i),v in pi.items():
    by_pillar[p].append((i,v))

pillars_ordered = [p[0] for p in PILLARS] + ["Other"]
for p in pillars_ordered:
    if p not in by_pillar: continue
    print(f"\n--- {p} ---")
    for i,v in sorted(by_pillar[p], key=lambda x:-x[1]["imps"]):
        print(f"  {i:<14} queries={v['queries']:<4} clicks={v['clicks']:<5} imps={v['imps']:,}")

# ==== SEMRUSH GAP: top opportunities by pillar ====
print("\n" + "=" * 80)
print("SEMRUSH GAP — top opportunities by Pillar x Intent (filter: KD<40)")
print("=" * 80)
sr_sig = [r for r in sr_gap if r["kd"]<40 and r["volume"]>=200]
sr_sig.sort(key=lambda r:-r["volume"])
gpi = defaultdict(list)
for r in sr_sig:
    gpi[(r["pillar"], r["intent_v2"])].append(r)

for p in pillars_ordered:
    found = False
    for (pp,i), lst in gpi.items():
        if pp != p: continue
        if not found:
            print(f"\n--- {p} ---"); found = True
        print(f"  [{i}] {len(lst)} kws — top 5:")
        for r in sorted(lst,key=lambda r:-r["volume"])[:5]:
            print(f"      vol={r['volume']:<6} kd={r['kd']:<3} — {r['keyword']}  (rank:{r['ranks']})")

# Save clustered outputs
with open(f"{SR}/gsc_clustered.csv","w",newline="") as f:
    w = csv.DictWriter(f, fieldnames=["pillar","intent","query","clicks","impressions","ctr","position"])
    w.writeheader()
    for r in gsc_sig:
        w.writerow({
            "pillar":r["pillar"],"intent":r["intent_v2"],"query":r["query"],
            "clicks":r["clicks"],"impressions":r["impressions"],
            "ctr":round(r["ctr"],2),"position":round(r["position"],1),
        })
with open(f"{SR}/gap_clustered.csv","w",newline="") as f:
    w = csv.DictWriter(f, fieldnames=["pillar","intent","keyword","volume","kd","ranks_in"])
    w.writeheader()
    for r in sr_gap:
        w.writerow({
            "pillar":r["pillar"],"intent":r["intent_v2"],"keyword":r["keyword"],
            "volume":r["volume"],"kd":r["kd"],"ranks_in":r["ranks"],
        })
print(f"\n\nSaved clustered files to {SR}/gsc_clustered.csv and gap_clustered.csv")
