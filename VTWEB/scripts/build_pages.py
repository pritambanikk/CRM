import os
import re
import json

base_dir = "/Users/pritambanikk/VT/vt_march266"
dev_dir = os.path.join(base_dir, "for_dev")
out_base = os.path.join(base_dir, "src/app/send-legal-notice")

# Flipkart template code structure
template_top = """import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import {
  AlertTriangle, MapPin, Mail, Building2,
  Phone, Scale, FileText, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, Hash, ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: {title},
  description: {description},
  keywords: {keywords},
  alternates: {
    canonical: {canonical},
  },
};

export default function {component_name}LegalNoticePage() {
  const schemas = {schemas_json};

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Notice", href: "/send-legal-notice" },
    { label: {breadcrumb_label}, current: true },
  ];

  const faqs = {faqs_json};

  return (
    <main className="min-h-screen bg-neutral-50/50">
      {schemas.map((schema, index) => (
         <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 1. Hero Section */}
      <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent overflow-hidden border-b border-primary/10">
        <div className="relative max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-8 md:gap-10">
          <div className="z-10 mt-2 mb-2">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  <AlertCircle className="w-4 h-4" />
                  Legal Guide & Service
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                  {h1}
                </h1>
                {intro_paragraphs}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/send-a-legal-notice"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Send Legal Notice — ₹1,499
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/consultation"
                  className="bg-white border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 text-center shadow-sm"
                >
                  Talk to a Lawyer First
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col gap-6">
              <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">Why VakilTech?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">15,000+ Notices Sent</p>
                    <p className="text-slate-500 text-sm">Across all states in India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0"><Scale className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Drafted by Advocates</p>
                    <p className="text-slate-500 text-sm">Valid in all Consumer Courts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg text-amber-600 shrink-0"><AlertTriangle className="w-5 h-5" /></div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">65% Settlement Rate</p>
                    <p className="text-slate-500 text-sm">Without going to court</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 py-16 space-y-12">

        {/* 2. Warning Box */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-2">{warning_title}</h2>
              {warning_paragraphs}
            </div>
          </div>
        </div>

        {/* 3. Registered Address Block */}
        <section className="scroll-mt-24" id="address">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">{entity_name} — Registered Address for Legal Notice</h2>
          <p className="text-slate-600 text-lg mb-8">Send your legal notice via Speed Post with Acknowledgment Due to:</p>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
              <Building2 className="text-slate-500" />
              <h3 className="font-bold text-xl text-slate-800">Legal Entity details</h3>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Legal Entity Name
                </div>
                <div className="font-bold text-slate-900 text-lg">{entity_name}</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4 bg-slate-50/50">
                <div className="font-semibold text-slate-500 flex items-center gap-2">
                  <Hash className="w-4 h-4" /> CIN
                </div>
                <div className="font-mono text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded inline-block w-max">{cin}</div>
              </div>

              <div className="p-6 grid sm:grid-cols-[200px_1fr] gap-4">
                <div className="font-semibold text-slate-500 flex flex-col gap-1 mt-1">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Registered Office</span>
                  <span className="text-xs font-normal ml-6">(For Legal Notice)</span>
                </div>
                <div className="text-slate-700 leading-relaxed font-medium">
                  {registered_address}
                </div>
              </div>

              {grievance_address}

              <div className="p-6 grid sm:grid-cols-2 gap-6 bg-white">
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Addresses
                  </div>
                  <div className="space-y-2">
                    {email_blocks}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="font-semibold text-slate-500 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Telephone
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 h-[calc(100%-2rem)] flex flex-col justify-center">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Contact Phone</div>
                    <div className="text-slate-900 font-bold text-lg">{phone}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. When Can You Send */}
        <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold text-slate-900">When Can You Send a Legal Notice?</h2>
          </div>
          <p className="text-slate-600 text-lg mb-6">{when_intro}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {situations}
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-lg font-medium shadow-inner">
            <span className="font-bold uppercase tracking-wider text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded inline-block mb-2 mr-2">Note</span>
            You should attempt resolution through customer support before sending a legal notice. However, if 15–30 days have passed with no satisfactory resolution, a legal notice is appropriate.
          </div>
        </section>

        {/* 5. Step by Step Guide */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4">Step-by-Step: How to Escalate Your Complaint</h2>

          <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10 pb-4">
            {escalation_steps}
          </div>
        </section>

        {/* 6. Which Laws Protect You */}
        {laws_section}

        {/* 7. Success Story */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 shadow-sm">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full text-sm mb-4">Real Success Story</div>
          {success_story}
        </section>

        {/* 8. Compensation */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{compensation_title}</h2>
          <p className="text-slate-600 text-lg mb-6">Beyond your refund, you can also claim:</p>

          <ul className="space-y-4 mb-8">
            {[
              "The cost of the legal notice (advocate fees)",
              "Compensation for mental harassment and inconvenience",
              "Interest on the amount withheld",
              "Costs of filing the consumer complaint (if it reaches court)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="bg-slate-100 p-2 rounded-full text-slate-500 shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl text-slate-800">
            <span className="font-bold text-primary">Expert Insight: </span>
            {compensation_desc}
          </div>
        </section>

        {/* 9. Mid-Page CTA */}
        <section className="bg-primary rounded-3xl p-10 text-center shadow-lg relative overflow-hidden my-16">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Stop Waiting for Customer Support. Take Legal Action.</h2>
            <p className="text-lg text-primary-foreground/90">Drafted by licensed advocates. Delivered in 24 hours.</p>

            <Link
              href="/send-a-legal-notice"
              className="inline-flex items-center gap-3 bg-white text-primary hover:bg-slate-50 px-8 py-5 rounded-xl font-bold text-xl shadow transition-all duration-300 transform hover:scale-105"
            >
              Send Legal Notice — ₹1,499
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* 10. Related Services */}
        {related_services}

      </div>

      <TrustSignalsSection />

      {faqs.length > 0 && (
        <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
  );
}
"""

def parse_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Meta
    url = re.search(r'URL:\s*(.+)', content).group(1).strip()
    slug = url.split('/')[-1]
    title = re.search(r'Title:\s*(.+)', content).group(1).strip()
    meta_desc = re.search(r'Meta Description:\s*(.+)', content).group(1).strip()
    keywords = re.search(r'Keywords:\s*(.+)', content).group(1).strip()

    # Schemas
    schema_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', content, re.DOTALL)
    schemas = []
    for sb in schema_blocks:
        try:
            schemas.append(json.loads(sb.strip()))
        except Exception as e:
            pass

    # Extract Blocks by [Block Name]
    sections = {}
    current_header = None
    current_text = []

    for line in content.split('\n'):
        if line.startswith('── '):
            continue
        line = line.strip()
        if not line:
            continue
        
        m = re.match(r'^\[(.*?)\]$', line)
        if m:
            if current_header:
                sections[current_header] = "\n".join(current_text)
            current_header = m.group(1).strip()
            current_text = []
        else:
            if current_header:
                current_text.append(line)
            
    if current_header:
        sections[current_header] = "\n".join(current_text)

    # Process Address
    address_section = None
    for k in sections.keys():
        if "Registered Address for Legal Notice" in k:
            address_section = sections[k]
            break
            
    entity_name, cin, reg_address, email1, email2, phone = "", "", "", "", "", ""
    if address_section:
        blocks = re.split(r'▸\s+', address_section)
        for b in blocks:
            if not b.strip(): continue
            lines = b.strip().split('\n')
            label = lines[0].strip()
            val = "\n".join(lines[1:]).strip()
            if "Legal Entity Name" in label: entity_name = val
            elif "CIN" in label: cin = val
            elif "Registered Office Address" in label: reg_address = val
            elif "Grievance Officer Email" in label: email1 = val
            elif "Legal / Compliance Email" in label: email2 = val
            elif "Legal Department Email" in label: email2 = val
            elif "Phone" in label: phone = val

    # Setup replacements
    faqs = []
    faq_schema = next((s for s in schemas if s.get("@type") == "FAQPage"), None)
    if faq_schema:
        for f in faq_schema.get("mainEntity", []):
            faqs.append({
                "question": f["name"],
                "answer": f["acceptedAnswer"]["text"]
            })

    # Intro & Warning
    intro_paragraphs = ""
    h1 = ""
    warning_title = ""
    warning_paragraphs = ""
    for k, v in sections.items():
        if k.startswith("Send Legal Notice to"):
            h1 = k
            ps = [f'<p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl">{t}</p>' if i==0 else f'<p className="text-lg text-slate-600">{t}</p>' for i, t in enumerate(v.split('\n'))]
            intro_paragraphs = "\n".join(ps)
        elif k.startswith("IMPORTANT —"):
            warning_title = k
            warning_p = [f'<p className="text-red-800/80 mb-4 leading-relaxed">{p}</p>' for p in v.split('\n')]
            warning_paragraphs = "\n".join(warning_p)

    # Email
    emails = []
    if email1: emails.append(f'<div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Grievance Officer</div><span className="text-primary font-medium hover:underline break-all">{email1}</span></div>')
    if email2 and email2 != email1: emails.append(f'<div className="bg-slate-50 p-3 rounded-lg border border-slate-100"><div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Legal Team</div><span className="text-primary font-medium hover:underline break-all">{email2}</span></div>')
    email_blocks = "\n".join(emails)

    # Situations
    situations = []
    when_intro = ""
    for k, v in sections.items():
        if "When Can You Send a Legal Notice" in k:
            sits = v.split('\n')
            when_intro = sits[0]
            if len(sits) > 1:
                for s in sits[1:]:
                    if s.strip():
                        situations.append(f'<div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" /><span className="text-slate-700 font-medium leading-snug">{s.strip()}</span></div>')
            break
            
    # Escalation Steps
    escalation_steps = []
    for k, v in sections.items():
        if "Step-by-Step" in k:
            lines = v.split('\n')
            for i in range(len(lines)):
                if lines[i].startswith("Step "):
                    title = lines[i]
                    desc = ""
                    if i+1 < len(lines) and not lines[i+1].startswith("Step "):
                        desc = lines[i+1]
                        if i+2 < len(lines) and not lines[i+2].startswith("Step "):
                           desc += " " + lines[i+2]
                    
                    bg_color = "bg-white border-2 border-slate-300 text-slate-500"
                    title_color = "text-slate-900"
                    if "Legal Notice" in title:
                        bg_color = "bg-primary border-2 border-white text-primary-foreground shadow ring-2 ring-primary/20"
                        title_color = "text-primary"
                    elif "Consumer Court" in title:
                        bg_color = "bg-slate-800 border-2 border-white text-white shadow"
                        title_color = "text-slate-800"
                        
                    step_num = title.split(" ")[1]
                    step_html = f'''<div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[17px] top-0 {bg_color} w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm">{step_num}</div>
              <h3 className="text-xl font-bold {title_color} mb-2">{title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{desc}</p>
            </div>'''
                    escalation_steps.append(step_html)
            break

    # Laws
    laws_section = '<section><h2 className="text-3xl font-bold text-slate-900 mb-8 pt-4 flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-primary" /> Which Laws Protect You?</h2><div className="grid md:grid-cols-2 gap-6">'
    for k, v in sections.items():
        if "Which Laws" in k:
            laws = v.split('\n')
            # Extract bullet descriptions
            for l in laws:
                if '—' in l:
                    law_title, law_desc = l.split('—', 1)
                    laws_section += f'<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-xl font-bold text-slate-800 mb-3 text-primary">{law_title.strip()}</h3><p className="text-slate-600 leading-relaxed">{law_desc.strip()}</p></div>'
            break
    laws_section += "</div></section>"
    
    # Success Story
    success_story = ""
    for k, v in sections.items():
        if "Success Story" in k:
            story = v.split('Note:')[0].strip()
            success_story = f'<div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-emerald-50"><p className="text-slate-700 text-lg leading-relaxed mb-6 italic hover:not-italic transition-all duration-500">"{story}"</p><div className="text-xs text-slate-400 pt-4 border-t border-slate-100">Note: This is a representative example based on the typical outcome of legal notices in consumer disputes. Individual results may vary.</div></div>'
            break

    # Comp
    comp_title = "How Much Compensation Can You Claim?"
    comp_desc = "Consumer courts regularly award ₹2,000 to ₹50,000 in compensation for clear-cut cases of deficiency of service."
    for k, v in sections.items():
        if "How Much Compensation" in k:
            comp_title = k
            lines = v.split('\n')
            comp_desc = lines[-1]
            break

    b_label = "Send Legal Notice"
    if faq_schema:
        for s in schemas:
            if s.get('@type') == 'BreadcrumbList':
                for item in s.get('itemListElement', []):
                    if item['position'] == 3:
                        b_label = item['name']

    # Replacements
    output = template_top.replace("{title}", json.dumps(title))
    output = output.replace("{description}", json.dumps(meta_desc))
    
    # Keyword list array
    key_arr = [k.strip() for k in keywords.split(',')]
    output = output.replace("{keywords}", json.dumps(key_arr))
    output = output.replace("{canonical}", json.dumps(f"https://vakiltech.in/send-legal-notice/{slug}"))
    output = output.replace("{component_name}", slug.replace("-", " ").title().replace(" ", ""))
    output = output.replace("{schemas_json}", json.dumps(schemas, indent=4))
    output = output.replace("{breadcrumb_label}", json.dumps(b_label))
    output = output.replace("{faqs_json}", json.dumps(faqs, indent=4))

    output = output.replace("{h1}", h1)
    output = output.replace("{intro_paragraphs}", intro_paragraphs)

    output = output.replace("{warning_title}", warning_title)
    output = output.replace("{warning_paragraphs}", warning_paragraphs)

    output = output.replace("{entity_name}", entity_name)
    output = output.replace("{cin}", cin)
    
    reg_address_lines = ["<><br/>".join(reg_address.split("\n"))]
    reg_clean = reg_address.replace("\n", "<br />")
    output = output.replace("{registered_address}", f'<span dangerouslySetInnerHTML={{{{__html: `{reg_clean}`}}}} />')
    
    output = output.replace("{grievance_address}", "")
    
    output = output.replace("{email_blocks}", email_blocks)
    output = output.replace("{phone}", phone)

    output = output.replace("{when_intro}", when_intro)
    output = output.replace("{situations}", "\n".join(situations))

    output = output.replace("{escalation_steps}", "\n".join(escalation_steps))

    output = output.replace("{laws_section}", laws_section)
    output = output.replace("{success_story}", success_story)
    
    output = output.replace("{compensation_title}", comp_title)
    output = output.replace("{compensation_desc}", comp_desc)
    
    # Related - dummy links for all
    rel_html = """<section className="pt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/send-legal-notice/consumer-complaint-legal-notice" className="block group">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col relative overflow-hidden">
                <h3 className="font-bold text-lg text-white mb-3 relative z-10">Consumer Complaint Notice</h3>
                <p className="text-slate-400 text-sm flex-grow mb-6 relative z-10">Send legal notices to any company for consumer disputes. All types handled.</p>
                <div className="text-white text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all relative z-10">See Details <ChevronRight className="w-4 h-4" /></div>
              </div>
            </Link>
          </div>
        </section>"""
    output = output.replace("{related_services}", rel_html)

    return slug, output

import glob
files = glob.glob(os.path.join(dev_dir, "send-legal-notice__*_content.txt"))

for f in files:
    try:
        slug, code = parse_file(f)
        if slug == "flipkart": continue
        target_dir = os.path.join(out_base, slug)
        os.makedirs(target_dir, exist_ok=True)
        with open(os.path.join(target_dir, "page.tsx"), "w", encoding="utf-8") as out_f:
            out_f.write(code)
        print(f"Generated: {slug}")
    except Exception as e:
        print(f"Failed to generate {f}: {e}")

print("Done")
