#!/usr/bin/env python3
"""Fetch GSC data for vakiltech.in - last 3 months."""
import json, sys, os
from datetime import date, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build

SERVICE_ACCOUNT_FILE = "/sessions/dazzling-dreamy-maxwell/mnt/uploads/search-console-claude-493718-fef5908c35ad.json"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]
SITE_URL = "sc-domain:vakiltech.in"   # try domain property first

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
svc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

# List sites the SA has access to
try:
    sites = svc.sites().list().execute()
    print("Accessible sites:", json.dumps(sites, indent=2))
except Exception as e:
    print("ERROR listing sites:", e)
    sys.exit(1)
