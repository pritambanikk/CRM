import os

old_file = "/tmp/terms-old.tsx"
new_file = "/Users/pritambanikk/VT/vt_march266/src/app/terms-and-conditions/page.tsx"

with open(old_file, "r") as f:
    old_content = f.read()

# Extract Accordion block
start_tag = "<Accordion type=\"single\" collapsible className=\"w-full\">"
end_tag = "</Accordion>"
start_idx = old_content.find(start_tag)
end_idx = old_content.find(end_tag) + len(end_tag)

accordion_block = old_content[start_idx:end_idx]

with open(new_file, "r") as f:
    new_content = f.read()

# Add imports if not present
if "import { Accordion" not in new_content:
    import_statement = """import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
"""
    new_content = new_content.replace(
        "import Link from 'next/link';",
        f"import Link from 'next/link';\n{import_statement}"
    )

# Replace the empty div
empty_div = """        <div className="max-w-4xl mx-auto py-12 space-y-6">
          
        </div>"""
        
replacement_div = f"""        <div className="max-w-4xl mx-auto py-12 space-y-6">
          {accordion_block}
        </div>"""

new_content = new_content.replace(empty_div, replacement_div)

with open(new_file, "w") as f:
    f.write(new_content)

print("Terms and conditions accordion restored successfully!")
