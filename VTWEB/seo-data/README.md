# vakiltech.in — SEO discovery data

This folder contains the raw data pulled during the SEO funnel strategy work. Referenced by:
- `../SEO_FUNNEL_STRATEGY_vakiltech.md` (§11 data references)
- `../SEO_EXECUTION_HANDOFF_vakiltech.md` (§9 data references)

## Structure

```
seo-data/
├── gsc_data/           # Google Search Console pulls (last 90 days, sc-domain:vakiltech.in)
│   ├── queries.json        # 3,273 raw GSC queries (query, clicks, impressions, ctr, position)
│   ├── pages.json          # 818 GSC pages
│   ├── query_page.json     # 4,792 query×page combos — use for cannibalization analysis
│   ├── query_device.json   # query × device breakdown
│   ├── legal_queries.csv   # 2,627 legal-intent queries (filtered, human-readable)
│   └── pages.csv           # page-level summary (human-readable)
│
├── semrush/            # SEMRUSH keyword gap analysis (India database, db=in)
│   ├── gap_data.csv            # 120+ filtered high-intent gap keywords (vol ≥200, KD <40)
│   ├── gap_clustered.csv       # gap keywords tagged with pillar + intent stage
│   ├── gsc_clustered.csv       # GSC legal queries tagged with pillar + intent stage
│   └── gap_batch1_raw.csv      # raw SEMRUSH domain-gap response (for reference only)
│
└── scripts/            # Python scripts used to generate the above
    ├── fetch_gsc.py            # basic GSC auth test
    ├── fetch_gsc_full.py       # full 90-day pull (queries / pages / query×page / query×device)
    ├── analyze_gsc.py          # intent classification (Action / Decision / Awareness)
    ├── analyze_gsc_pages.py    # page-level performance + cannibalization detection
    └── build_clusters.py       # map keywords to 10 pillars × 3 intents
```

## Regenerating the data

To refresh the GSC pulls against a newer date window:

1. Keep the service-account JSON (`search-console-claude-493718-fef5908c35ad.json`) outside this folder — do not commit it.
2. Install deps: `pip install google-api-python-client google-auth --break-system-packages`
3. Edit the date range in `scripts/fetch_gsc_full.py` and re-run. Outputs overwrite `gsc_data/*`.
4. Re-run `analyze_gsc.py`, `analyze_gsc_pages.py`, `build_clusters.py` in that order.

For SEMRUSH: the gap files were pulled via the SEMRUSH MCP (`domain_organic_organic` and `domain_domains` reports). There's no standalone script — re-run via MCP with the same 5 competitors:
- digilawyer.ai
- lawspot.in
- legalparihar.in
- vakilapna.com
- lawghar.in

## Headline findings (from this data)

- 112,420 impressions / 1,653 clicks in last 90 days (1.47% aggregate CTR)
- Awareness-stage CTR is 0.41% — the biggest leak
- Decision-stage CTR is 5.77% — keep feeding it
- 213 query×page cannibalization cases at ≥50 impressions
- Top leak: `vakil` query → homepage, 39,741 imps / 0.1% CTR
- Biggest content opportunity: BNS 356 / defamation cluster, ~17,000 imps at <1% CTR

See `../SEO_FUNNEL_STRATEGY_vakiltech.md` §4 for full interpretation.
