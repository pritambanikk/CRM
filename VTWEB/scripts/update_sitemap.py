import os

sitemap_path = "/Users/pritambanikk/VT/vt_march266/public/sitemap.xml"
with open(sitemap_path, "r", encoding="utf-8") as f:
    content = f.read()

companies = [
    "amazon-india", "bigbasket", "blinkit", "byjus", "cred", "dunzo", "flipkart",
    "irctc", "makemytrip", "meesho", "myntra", "nykaa", "ola-cabs", "ola-electric",
    "paytm", "phonepe", "rapido", "snapdeal", "swiggy", "tata-cliq", "uber-india",
    "unacademy", "urban-company", "zepto", "zomato"
]

to_add = []
for c in companies:
    loc = f"<loc>https://vakiltech.in/send-legal-notice/{c}</loc>"
    if loc not in content:
        url_block = f"""  <url>
    <loc>https://vakiltech.in/send-legal-notice/{c}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
"""
        to_add.append(url_block)

if to_add:
    insertion = "".join(to_add)
    content = content.replace("</urlset>", insertion + "</urlset>")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Added {len(to_add)} URLs to sitemap.xml")
else:
    print("No new URLs needed.")
