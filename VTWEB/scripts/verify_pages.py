import os
import re

base_dir = "/Users/pritambanikk/VT/vt_march266/src/app/send-legal-notice"

files_to_check = [f for f in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, f)) and f not in ['.DS_Store', 'consumer-complaint-legal-notice', 'page.tsx']]

print(f"Verifying {len(files_to_check)} company pages...\\n")
print("-" * 80)
print(f"{'Company Slug':<20} | {'Status':<10} | {'Title':<15} | {'Canonical':<20} | {'Schema':<10}")
print("-" * 80)

passed = 0
for slug in files_to_check:
    filepath = os.path.join(base_dir, slug, 'page.tsx')
    status = "MISSING"
    title_ok = "FAIL"
    canon_ok = "FAIL"
    schema_ok = "FAIL"
    
    if os.path.exists(filepath):
        status = "200 (File Exists)"
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Title
            title_match = re.search(r'title:\s*"(.*?)"', content)
            if title_match and len(title_match.group(1).strip()) > 0:
                title_ok = "OK"
                
            # Canonical
            canon_match = re.search(r'canonical:\s*"(.*?)"', content)
            if canon_match and slug in canon_match.group(1):
                canon_ok = "OK"
                
            # Schema
            if '"@context": "https://schema.org"' in content and '<script' in content:
                schema_ok = "OK"
                
        if status.startswith("200") and title_ok == "OK" and canon_ok == "OK" and schema_ok == "OK":
            passed += 1
            status = "200 OK"
    
    print(f"{slug:<20} | {status:<10} | {title_ok:<15} | {canon_ok:<20} | {schema_ok:<10}")

print("-" * 80)
print(f"Total passed: {passed} / {len(files_to_check)}\\n")
