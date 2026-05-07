import os
import glob

base_dir = "src/app/send-legal-notice"

# Define the exact strings
step3_block = """            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 bg-white border-2 border-slate-300 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Step 3 — National Consumer Helpline</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Call 1915 or file at consumerhelpline.gov.in if unresolved in 15 days.</p>
            </div>
"""

step4_old = """<div className="absolute -left-[17px] top-0 bg-primary border-2 border-white text-primary-foreground shadow ring-2 ring-primary/20 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">4</div>
              <h3 className="text-xl font-bold text-primary mb-2">Step 4 — Send a Legal Notice</h3>"""

step4_new = """<div className="absolute -left-[17px] top-0 bg-primary border-2 border-white text-primary-foreground shadow ring-2 ring-primary/20 w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">3</div>
              <h3 className="text-xl font-bold text-primary mb-2">Step 3 — Send a Legal Notice</h3>"""

count = 0
for filepath in glob.glob(os.path.join(base_dir, "*/page.tsx")):
    with open(filepath, "r") as f:
        content = f.read()

    # It's possible the indentation might be slightly different in some pages? We'll check via contains
    # For safety, let's just do a direct replace since python generated them all identically
    if "Step 3 \u2014 National Consumer Helpline" in content: # \u2014 is the em-dash used
        # Using string replacing on the literal block if possible
        # Actually a safer way is to use regex or split because of potential line ending/indent differences
        pass

    import re
    # Remove Step 3 block
    content = re.sub(r'<div className="relative pl-8 md:pl-10">\s*<div className="absolute[^>]+>3</div>\s*<h3[^>]+>Step 3 — National Consumer Helpline</h3>.*?</div>', '', content, flags=re.DOTALL)
    
    # Replace Step 4 with Step 3
    content = content.replace("Step 4 — Send a Legal Notice", "Step 3 — Send a Legal Notice")
    content = re.sub(r'(<div className="absolute -left-\[17px\] top-0 bg-primary[^>]+>)4(</div>)', r'\g<1>3\g<2>', content)

    with open(filepath, "w") as f:
        f.write(content)
        
    count += 1

print(f"Updated {count} files.")
