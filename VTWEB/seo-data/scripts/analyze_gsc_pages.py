#!/usr/bin/env python3
"""Analyze GSC page performance + cannibalization detection."""
import json, csv
from collections import defaultdict, Counter

GSC = "/sessions/dazzling-dreamy-maxwell/mnt/outputs/gsc_data"
pages = json.load(open(f"{GSC}/pages.json"))
qp    = json.load(open(f"{GSC}/query_page.json"))

p_rows = []
for r in pages:
    p_rows.append({
        "page": r["keys"][0],
        "clicks": r.get("clicks",0),
        "impressions": r.get("impressions",0),
        "ctr": r.get("ctr",0)*100,
        "position": r.get("position",0),
    })

p_rows.sort(key=lambda r: -r["impressions"])

print("=== TOP 30 PAGES BY IMPRESSIONS ===")
print(f"{'Imp':>6} {'Clk':>4} {'CTR%':>5} {'Pos':>5}  Path")
for r in p_rows[:30]:
    path = r["page"].replace("https://vakiltech.in","")[:70]
    print(f"{r['impressions']:>6} {r['clicks']:>4} {r['ctr']:>5.1f} {r['position']:>5.1f}  {path}")

print()
print("=== TOP 20 PAGES BY CLICKS ===")
for r in sorted(p_rows, key=lambda r:-r["clicks"])[:20]:
    path = r["page"].replace("https://vakiltech.in","")[:70]
    print(f"{r['impressions']:>6} {r['clicks']:>4} {r['ctr']:>5.1f} {r['position']:>5.1f}  {path}")

# === Cannibalization: same query ranking for multiple pages ===
print("\n=== CANNIBALIZATION DETECTION ===")
by_q = defaultdict(list)
for r in qp:
    q, page = r["keys"][0], r["keys"][1]
    by_q[q].append({
        "page": page.replace("https://vakiltech.in",""),
        "clicks": r.get("clicks",0),
        "impressions": r.get("impressions",0),
        "position": r.get("position",0),
    })
cannib = [(q,lst) for q,lst in by_q.items() if len(lst)>=2 and sum(l["impressions"] for l in lst)>=50]
cannib.sort(key=lambda x:-sum(l["impressions"] for l in x[1]))
print(f"{len(cannib)} queries have ≥2 pages ranking with ≥50 impressions")
print()
print("--- Top 15 cannibalization cases (by impressions) ---")
for q, lst in cannib[:15]:
    total_imp = sum(l["impressions"] for l in lst)
    total_clk = sum(l["clicks"] for l in lst)
    print(f"\nQuery: '{q}'  (total imp={total_imp}, clicks={total_clk})")
    for l in sorted(lst, key=lambda l:-l["impressions"])[:5]:
        print(f"   imp={l['impressions']:<5} clk={l['clicks']:<4} pos={l['position']:>4.1f}  {l['page']}")

# Save CSV
with open(f"{GSC}/pages.csv","w",newline="") as f:
    w = csv.DictWriter(f, fieldnames=["page","clicks","impressions","ctr","position"])
    w.writeheader()
    for r in p_rows:
        w.writerow(r)
