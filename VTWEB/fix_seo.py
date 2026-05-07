import os
import re

base_dir = '/Users/pritambanikk/VT/vt_march266/src/app'

cities = {'delhi', 'mumbai', 'bangalore', 'chennai', 'hyderabad', 'kolkata', 'jaipur', 'pune', 'ahmedabad', 'gurgaon', 'noida', 'faridabad'}
site_url = 'https://vakiltech.in'
brand_pattern = re.compile(r'VakalatnaamaToday|VakilTech|Vakiltech|VAKILTECH')

files_modified = 0
canonical_own_fixes = 0
canonical_city_fixes = 0
brand_name_fixes = 0

for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f == 'page.tsx':
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as f_in:
                content = f_in.read()
            
            orig_content = content
            
            # calculate slug
            rel_dir = os.path.relpath(root, base_dir)
            if rel_dir == '.':
                slug = ''
            else:
                slug = f"/{rel_dir}"
                slug = slug.replace('\\', '/')
            
            path_parts = slug.strip('/').split('/')
            
            is_city_page = False
            expected_canonical_path = slug
            if path_parts and path_parts[-1].lower() in cities:
                if len(path_parts) > 1:
                    is_city_page = True
                    expected_canonical_path = '/' + '/'.join(path_parts[:-1])
                else:
                    is_city_page = True
                    expected_canonical_path = ''
            
            expected_canonical_url = f"{site_url}{expected_canonical_path}"
            
            canonical_regex = re.compile(r'canonical:\s*["\'](.*?)["\']')
            
            def replace_canonical(match):
                global canonical_own_fixes, canonical_city_fixes
                existing = match.group(1)
                
                # If they already match the correct one, do nothing.
                if existing != expected_canonical_url:
                    if is_city_page:
                        canonical_city_fixes += 1
                    else:
                        canonical_own_fixes += 1
                    return f'canonical: "{expected_canonical_url}"'
                return match.group(0)

            # Skip changing canonical for dynamic routes (e.g., [slug])
            if '[' not in slug and ']' not in slug:
                content = canonical_regex.sub(replace_canonical, content)
            
            # fix brand names
            brand_matches = len(brand_pattern.findall(content))
            if brand_matches > 0:
                brand_name_fixes += brand_matches
                content = brand_pattern.sub('vakiltech', content)
            
            if content != orig_content:
                with open(file_path, 'w', encoding='utf-8') as f_out:
                    f_out.write(content)
                files_modified += 1

print(f"Total files modified: {files_modified}")
print(f"Count of canonical URLs fixed: {canonical_own_fixes + canonical_city_fixes}")
print(f"  - Own-URL fixes: {canonical_own_fixes}")
print(f"  - City->Parent fixes: {canonical_city_fixes}")
print(f"Count of brand name instances corrected: {brand_name_fixes}")

