import os
import glob
import re

base_dir = "src/app/send-legal-notice"

count = 0
for filepath in glob.glob(os.path.join(base_dir, "*/page.tsx")):
    with open(filepath, "r") as f:
        content = f.read()

    # Step 5 — Consumer Court -> Step 4 — Consumer Court
    content = content.replace("Step 5 — Consumer Court", "Step 4 — Consumer Court")
    content = re.sub(r'(<div className="absolute -left-\[17px\] top-0 bg-slate-800[^>]+>)5(</div>\s*<h3[^>]+>Step 4 — Consumer Court)', r'\g<1>4\g<2>', content)

    with open(filepath, "w") as f:
        f.write(content)
        
    count += 1

print(f"Updated {count} files.")
