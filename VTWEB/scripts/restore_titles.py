import os
import glob
import re

base_dir = "for_dev"
pages_dir = "src/app/send-legal-notice"

count = 0
for filepath in glob.glob(os.path.join(base_dir, "send-legal-notice__*_content.txt")):
    company_slug = os.path.basename(filepath).replace("send-legal-notice__", "").replace("_content.txt", "")
    page_path = os.path.join(pages_dir, company_slug, "page.tsx")
    
    if os.path.exists(page_path):
        with open(filepath, "r") as f:
            content_txt = f.read()
            
        title_match = re.search(r'Title:\s*(.*?)\n', content_txt)
        if title_match:
            correct_title = title_match.group(1).strip()
            
            with open(page_path, "r") as f:
                page_content = f.read()
                
            # Replace the title line
            # The current title line looks like: title: "Step 4 \u2014 Consumer Court", or something similar
            page_content = re.sub(r'title:\s*".*?",', f'title: "{correct_title}",', page_content, count=1)
            
            with open(page_path, "w") as f:
                f.write(page_content)
            count += 1
            print(f"Restored title for {company_slug}: {correct_title}")

print(f"Total restored: {count}")
