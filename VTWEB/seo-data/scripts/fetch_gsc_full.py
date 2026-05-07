#!/usr/bin/env python3
"""Fetch GSC query/page data for vakiltech.in - last 90 days."""
import json, sys, os, time
from datetime import date, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

SERVICE_ACCOUNT_FILE = "/sessions/dazzling-dreamy-maxwell/mnt/uploads/search-console-claude-493718-fef5908c35ad.json"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
SITE_URL = "sc-domain:vakiltech.in"

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
svc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

END_DATE   = date.today() - timedelta(days=2)           # GSC lag
START_DATE = END_DATE - timedelta(days=90)

def search(dims, row_limit=25000, filters=None):
    all_rows = []
    start = 0
    while True:
        body = {
            "startDate": START_DATE.isoformat(),
            "endDate":   END_DATE.isoformat(),
            "dimensions": dims,
            "rowLimit": row_limit,
            "startRow": start,
            "dataState": "final",
        }
        if filters:
            body["dimensionFilterGroups"] = filters
        resp = svc.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
        rows = resp.get("rows", [])
        all_rows.extend(rows)
        if len(rows) < row_limit:
            break
        start += row_limit
        time.sleep(0.4)
    return all_rows

outdir = "/sessions/dazzling-dreamy-maxwell/mnt/outputs/gsc_data"
os.makedirs(outdir, exist_ok=True)

print(f"Fetching GSC data: {START_DATE} → {END_DATE}")

# 1. Top QUERIES (all)
print("1/4: queries ...")
queries = search(["query"])
with open(f"{outdir}/queries.json", "w") as f:
    json.dump(queries, f, indent=2)
print(f"   got {len(queries)} queries")

# 2. Top PAGES (all)
print("2/4: pages ...")
pages = search(["page"])
with open(f"{outdir}/pages.json", "w") as f:
    json.dump(pages, f, indent=2)
print(f"   got {len(pages)} pages")

# 3. QUERY x PAGE combos (top 25k by clicks+impressions)
print("3/4: query x page ...")
qp = search(["query", "page"])
with open(f"{outdir}/query_page.json", "w") as f:
    json.dump(qp, f, indent=2)
print(f"   got {len(qp)} combos")

# 4. Query x Device (for mobile/desktop intent shifts)
print("4/4: query x device ...")
qd = search(["query", "device"])
with open(f"{outdir}/query_device.json", "w") as f:
    json.dump(qd, f, indent=2)
print(f"   got {len(qd)} combos")

# Summary totals
tot_clicks = sum(r.get("clicks",0) for r in queries)
tot_imps   = sum(r.get("impressions",0) for r in queries)
print("\n=== TOTAL (last 90 days) ===")
print(f"Clicks:      {tot_clicks:,}")
print(f"Impressions: {tot_imps:,}")
print(f"Avg CTR:     {tot_clicks/tot_imps*100:.2f}%" if tot_imps else "")
