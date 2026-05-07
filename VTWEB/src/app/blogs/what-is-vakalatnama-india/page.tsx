import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Vakalatnama — Meaning, Format & Legal Significance in India | vakiltech",
  description:
    "A vakalatnama authorises a lawyer to represent you in court. Learn its meaning, format, stamp duty, and when you need one — plus talk to a verified advocate.",
  keywords: [
    "what is vakalat",
    "what is vakalatnama",
    "vakalat meaning",
    "vakalatnama meaning",
    "vakalat form",
    "vakalatnama india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/blogs/what-is-vakalatnama-india",
  },
};

export default function WhatIsVakalatnamaPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "What is Vakalatnama", current: true },
  ];

  const faqs = [
    {
      question: "What is the difference between vakalatnama and power of attorney?",
      answer:
        "A vakalatnama specifically authorises a lawyer (advocate) to represent you in a court of law. It is governed by the Advocates Act, 1961 and the relevant procedural codes. A power of attorney (PoA) is a broader document that authorises any person — not necessarily a lawyer — to act on your behalf for property transactions, banking, or other non-litigation matters. A PoA does not give a person the right to appear in court as an advocate; for that, they must hold a valid Bar Council enrolment and a vakalatnama.",
    },
    {
      question: "Can I change my lawyer after signing a vakalatnama?",
      answer:
        "Yes, you can change your advocate at any time. You need to revoke the existing vakalatnama by sending a written notice to both the court and your current advocate. Once the revocation is recorded, you can execute a fresh vakalatnama in favour of a new advocate. In ongoing cases, the court will record the change of counsel and proceedings will continue without interruption. Note that fees already paid to the outgoing advocate may not be refundable depending on your agreement.",
    },
    {
      question: "Is a vakalatnama required for a consumer court case?",
      answer:
        "Yes, if you are engaging an advocate to represent you before a District Consumer Disputes Redressal Commission, State Commission, or the National Consumer Disputes Redressal Commission (NCDRC), a vakalatnama is required. However, under the Consumer Protection Act, 2019, parties are also permitted to appear in person without an advocate — in which case no vakalatnama is needed. If you choose to have a lawyer, they must file a signed vakalatnama before the commission to establish their authority to represent you.",
    },
    {
      question: "Can an NRI sign a vakalatnama outside India?",
      answer:
        "Yes, a Non-Resident Indian (NRI) can sign a vakalatnama outside India. The document must be notarised by a Notary Public in the country where it is executed and then apostilled (if the country is a signatory to the Hague Apostille Convention) or attested by the Indian Embassy or High Commission in that country. Once attested, the vakalatnama is valid for use in Indian courts. Some courts may require a stamp paper of appropriate value to be attached upon arrival in India.",
    },
    {
      question: "What happens if I don't sign a vakalatnama?",
      answer:
        "If your advocate appears in court without a duly signed vakalatnama on record, the court can refuse to recognise their authority to represent you. This can result in your case not being heard on that date, a possible adverse order, or the matter being adjourned at your cost. In some courts, the vakalatnama must be filed at the time of filing the suit or petition itself — failing to do so can delay proceedings. Always ensure your advocate has filed the vakalatnama before the first hearing.",
    },
    {
      question: "Is a vakalatnama the same as a retainer agreement?",
      answer:
        "No. A vakalatnama is a legal/procedural document filed with the court that gives an advocate the legal authority to appear and act on your behalf. A retainer agreement (also called an engagement letter) is a private contract between you and your advocate specifying fees, scope of work, payment terms, and confidentiality. You can have a retainer agreement without a vakalatnama (e.g., for legal advice or document drafting) and you can execute a vakalatnama without a separate retainer agreement. In practice, most advocates use both for court representation matters.",
    },
    {
      question: "How much does a vakalatnama cost?",
      answer:
        "The document itself is inexpensive — the primary cost is the stamp paper on which it is printed. Stamp duty varies by state and court: district courts typically require stamp paper worth ₹10 to ₹100; High Courts require ₹20 to ₹500; some states have fixed values. Your advocate will procure the correct stamp paper and handle this for you as part of their representation. There is no separate government fee for filing a vakalatnama — it is filed alongside your petition or plaint.",
    },
    {
      question: "What is a general vakalatnama vs a special vakalatnama?",
      answer:
        "A general vakalatnama (also called a general power of vakalatnama) authorises the advocate to represent you in all proceedings in a particular case — including hearings, arguments, filing documents, accepting service, and taking all steps necessary. A special vakalatnama, by contrast, is limited to a specific act or hearing — for example, only to file a particular document or appear on a specific date. Special vakalatnamas are less common and are used when a client wants to restrict the scope of the advocate's authority for a particular purpose.",
    },
  ];

  return (
    <>
      {/* schema-migrated */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"Article","headline":"What is a Vakalatnama? Meaning, Format & How It Works in India","description":"A vakalatnama authorises a lawyer to represent you in court. Learn its meaning, format, stamp duty, and when you need one — plus talk to a verified advocate.","author":{"@type":"Organization","name":"vakiltech Legal Team"},"publisher":{"@type":"Organization","name":"vakiltech","logo":{"@type":"ImageObject","url":"https://vakiltech.in/logo.png"}},"datePublished":"2026-04-24T00:00:00+05:30","dateModified":"2026-04-24T00:00:00+05:30","mainEntityOfPage":{"@type":"WebPage","@id":"https://vakiltech.in/blogs/what-is-vakalatnama-india"}}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between vakalatnama and power of attorney?","acceptedAnswer":{"@type":"Answer","text":"A vakalatnama specifically authorises a lawyer (advocate) to represent you in a court of law. It is governed by the Advocates Act, 1961 and the relevant procedural codes. A power of attorney (PoA) is a broader document that authorises any person — not necessarily a lawyer — to act on your behalf for property transactions, banking, or other non-litigation matters. A PoA does not give a person the right to appear in court as an advocate; for that, they must hold a valid Bar Council enrolment and a vakalatnama."}},{"@type":"Question","name":"Can I change my lawyer after signing a vakalatnama?","acceptedAnswer":{"@type":"Answer","text":"Yes, you can change your advocate at any time. You need to revoke the existing vakalatnama by sending a written notice to both the court and your current advocate. Once the revocation is recorded, you can execute a fresh vakalatnama in favour of a new advocate."}},{"@type":"Question","name":"Is a vakalatnama required for a consumer court case?","acceptedAnswer":{"@type":"Answer","text":"Yes, if you are engaging an advocate to represent you before a District Consumer Disputes Redressal Commission, State Commission, or the NCDRC, a vakalatnama is required. However, parties are also permitted to appear in person without an advocate — in which case no vakalatnama is needed."}},{"@type":"Question","name":"Can an NRI sign a vakalatnama outside India?","acceptedAnswer":{"@type":"Answer","text":"Yes, an NRI can sign a vakalatnama outside India. The document must be notarised by a Notary Public in the country of execution and then apostilled or attested by the Indian Embassy or High Commission. Once attested, it is valid for use in Indian courts."}},{"@type":"Question","name":"What happens if I don't sign a vakalatnama?","acceptedAnswer":{"@type":"Answer","text":"If your advocate appears in court without a duly signed vakalatnama on record, the court can refuse to recognise their authority to represent you. This can result in your case not being heard, an adverse order, or an adjournment at your cost."}},{"@type":"Question","name":"Is a vakalatnama the same as a retainer agreement?","acceptedAnswer":{"@type":"Answer","text":"No. A vakalatnama is a procedural document filed with the court that gives an advocate legal authority to appear and act on your behalf. A retainer agreement is a private contract specifying fees, scope of work, and payment terms. Both are commonly used together for court representation matters."}},{"@type":"Question","name":"How much does a vakalatnama cost?","acceptedAnswer":{"@type":"Answer","text":"The primary cost is the stamp paper on which it is printed. Stamp duty varies by state: district courts typically require ₹10–₹100; High Courts require ₹20–₹500. Your advocate will procure the correct stamp paper as part of their representation."}},{"@type":"Question","name":"What is a general vakalatnama vs a special vakalatnama?","acceptedAnswer":{"@type":"Answer","text":"A general vakalatnama authorises the advocate to represent you in all proceedings in a case. A special vakalatnama is limited to a specific act or hearing — for example, only to file a particular document or appear on one specific date."}}]}`,
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="bg-card border-b">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              What is a Vakalatnama? Meaning, Format &amp; How It Works in India
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A vakalatnama is the formal document that authorises a lawyer to represent you in a court of law. Without it, no advocate can legally appear on your behalf — it is the foundation of every court-based lawyer-client relationship in India.
            </p>
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  V
                </div>
                <div>
                  <p className="font-medium text-foreground">vakiltech Legal Team</p>
                  <p className="text-xs text-muted-foreground">Reviewed by Licensed Advocates</p>
                </div>
              </div>
              <div className="flex items-center gap-6 ml-auto text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  24 April 2026
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90 space-y-8">

            {/* Section 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is a Vakalatnama?</h2>
              <p className="text-muted-foreground mb-4">
                A vakalatnama is a legal document through which a client formally authorises an advocate to appear, plead, and act on their behalf before a court of law. The word breaks down simply: <strong className="text-foreground">vakalat</strong> means authority or power (from Arabic and Persian), and <strong className="text-foreground">nama</strong> means document or letter. Together, vakalatnama translates to "a document of authority."
              </p>
              <p className="text-muted-foreground mb-4">
                In practical terms, it is the piece of paper your lawyer files in court that says: "This client has authorised me to represent them." Without a vakalatnama on record, an advocate has no <em>locus standi</em> — no legal standing — to speak, file documents, or take any procedural step on your behalf before a judge.
              </p>
              <p className="text-muted-foreground mb-4">
                The vakalatnama is distinct from hiring a lawyer for advice or document drafting. You can consult an advocate and pay for their opinion without a vakalatnama. But the moment representation in court is required — whether for a civil suit, criminal matter, consumer forum complaint, High Court writ, or arbitration — a signed vakalatnama must be placed on record.
              </p>
              <p className="text-muted-foreground">
                Under the Advocates Act, 1961 and the Civil Procedure Code, 1908, a vakalatnama confers specific powers on the advocate: to sign pleadings, to accept service of court notices, to make admissions or concessions of fact, and generally to do all acts incidental to the conduct of the case — unless the scope is expressly restricted by the client.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Origin of the Word Vakalat</h2>
              <p className="text-muted-foreground mb-4">
                The word <strong className="text-foreground">vakalat</strong> derives from the Arabic root <em>wakala</em> (وَكَالَة), meaning agency, delegation, or representation. In classical Islamic jurisprudence (fiqh), wakala is a recognised legal concept referring to the appointment of an agent to act on one's behalf — a form of proxy that has been part of Islamic commercial and legal practice for over a thousand years.
              </p>
              <p className="text-muted-foreground mb-4">
                The concept entered the Indian legal vocabulary during the Mughal era when Persian was the language of court administration. As British colonial authorities formalised the Indian court system, the term was retained and absorbed into procedural law — making it one of the few Arabic-origin legal terms to survive intact in modern Indian jurisprudence.
              </p>
              <p className="text-muted-foreground mb-4">
                You will encounter several alternate spellings in practice — all referring to the same document:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">Vakalatnama</strong> — the most commonly used spelling in Indian courts</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">Vakaltnama</strong> — a shortened variant used in some states</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">Vikalat</strong> — a regional pronunciation variant, particularly in parts of Maharashtra and Gujarat</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">Vakalat</strong> — used informally to refer to the practice of law itself ("vakalat karna" = to practise law)</span></li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Regardless of spelling, the legal meaning and effect is the same: a written instrument conferring authority on an advocate enrolled with the Bar Council of India to represent the signatory in legal proceedings.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">When Do You Need a Vakalatnama?</h2>
              <p className="text-muted-foreground mb-4">
                A vakalatnama is required any time an advocate is engaged to represent you before a judicial or quasi-judicial forum. Here is a breakdown of when it is and is not required:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">You DO need a vakalatnama for:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">Civil court appearances</strong> — for suits, petitions, applications, and appeals before any civil court from the trial court to the Supreme Court</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">Criminal matters</strong> — when an advocate appears for an accused or complainant before a Magistrate, Sessions Court, or High Court</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">High Court proceedings</strong> — must be on stamp paper of the prescribed value for the state</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">Consumer forum proceedings</strong> — required when an advocate represents a party before District Commissions, State Commissions, or NCDRC</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">Arbitration proceedings</strong> — required when a lawyer is engaged to represent a party in domestic or international arbitration under the Arbitration and Conciliation Act, 1996</span></li>
                    <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">✓</span><span><strong className="text-foreground">Tribunal proceedings</strong> — for matters before NCLT, DRAT, ITAT, CAT, and other statutory tribunals</span></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">You do NOT need a vakalatnama for:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-3"><span className="text-destructive font-bold mt-0.5">✗</span><span>Legal consultations and advice (in-person, phone, or video)</span></li>
                    <li className="flex gap-3"><span className="text-destructive font-bold mt-0.5">✗</span><span>Drafting legal notices, agreements, wills, or other documents</span></li>
                    <li className="flex gap-3"><span className="text-destructive font-bold mt-0.5">✗</span><span>Negotiation assistance where the advocate is not appearing formally before a court</span></li>
                    <li className="flex gap-3"><span className="text-destructive font-bold mt-0.5">✗</span><span>Appearing in person before a consumer forum (parties can represent themselves without a lawyer)</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Vakalatnama Format — What It Must Contain</h2>
              <p className="text-muted-foreground mb-4">
                While there is no single national prescribed form for a vakalatnama (unlike some other court documents), all vakalatnamas must contain certain essential elements to be legally valid. Here is what a complete vakalatnama must include:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">1.</span><span><strong className="text-foreground">Client's full name and address</strong> — the person authorising the advocate</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">2.</span><span><strong className="text-foreground">Advocate's full name and Bar Council enrolment number</strong> — confirming the person is a duly enrolled advocate under the Advocates Act, 1961</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">3.</span><span><strong className="text-foreground">Name of the court</strong> — the specific court, tribunal, or forum before which the advocate is authorised to appear</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">4.</span><span><strong className="text-foreground">Case details</strong> — case number, parties' names, nature of the suit or proceeding (if already filed)</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">5.</span><span><strong className="text-foreground">Scope of authority</strong> — whether it is a general vakalatnama (all steps in the case) or a special one (limited to a specific act)</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">6.</span><span><strong className="text-foreground">Client's signature</strong> — the document must be signed (and in some courts, thumb-printed) by the client personally</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">7.</span><span><strong className="text-foreground">Date of execution</strong> — when the document was signed</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold mt-0.5">8.</span><span><strong className="text-foreground">Witness details</strong> — name and signature of at least one witness to the client's signature</span></li>
              </ul>
              <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Stamp paper note:</strong> For High Courts and some trial courts, the vakalatnama must be executed on non-judicial stamp paper of the value prescribed by the relevant State Stamp Act. Your advocate will tell you exactly what is required for your court and state.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Stamp Duty on Vakalatnama</h2>
              <p className="text-muted-foreground mb-4">
                Stamp duty on a vakalatnama is governed by the Indian Stamp Act, 1899 as amended by the respective state. There is no uniform national rate — it varies significantly by state and by the level of court. Here are typical ranges:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Court / Forum</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Typical Stamp Duty Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">District / Trial Courts</td>
                      <td className="py-2 pr-4">₹10 – ₹100 (varies by state)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">High Courts</td>
                      <td className="py-2 pr-4">₹20 – ₹500 (state-specific)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Supreme Court of India</td>
                      <td className="py-2 pr-4">₹100 (non-judicial stamp paper)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Consumer Forums</td>
                      <td className="py-2 pr-4">Often free-form or ₹10–₹20 depending on state</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">NCLT / DRAT / Tribunals</td>
                      <td className="py-2 pr-4">₹50 – ₹200 depending on tribunal rules</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4">
                Some states — such as Maharashtra, Karnataka, and Tamil Nadu — have their own Schedule of Stamp Duty that specifies the exact amount for vakalatnamas before different courts. Your advocate will source the correct stamp paper from a licensed stamp vendor.
              </p>
              <div className="mt-4 p-4 bg-secondary/50 border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">The bottom line:</strong> You do not need to worry about stamp duty — your advocate handles procurement as a routine part of representation. Your only obligation is to sign the document once it is prepared.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Signing and Attestation</h2>
              <p className="text-muted-foreground mb-4">
                Executing a vakalatnama correctly is important — an improperly signed document can be rejected by the court registry. Here is what you need to know:
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Who must sign?</p>
                  <p className="text-muted-foreground text-sm">The client must sign personally. In the case of a company or firm, the authorised signatory (as per board resolution or partnership deed) signs on behalf of the entity. For a minor, the natural guardian or court-appointed guardian signs.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Who witnesses the signature?</p>
                  <p className="text-muted-foreground text-sm">At least one witness — typically an adult who is not a party to the case — must sign and provide their name and address. In practice, the advocate's clerk often serves as witness.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Is ID proof required?</p>
                  <p className="text-muted-foreground text-sm">Most courts do not require ID proof to be filed along with the vakalatnama, but some High Court rules (e.g., Delhi High Court in certain matters) require the client's identity to be verified. Your advocate will advise you on the specific requirements for your court.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Signing abroad (for NRI clients)</p>
                  <p className="text-muted-foreground text-sm">An NRI client can sign a vakalatnama outside India. The document should be notarised by a local Notary Public and then either apostilled (for Hague Convention countries) or attested by the Indian Embassy or High Commission. Once the apostille or attestation is in place, the document carries the same legal weight before Indian courts as one signed in India. Some advocates also accept a scanned copy for urgent filings, with the original to follow by post.</p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">Revoking a Vakalatnama</h2>
              <p className="text-muted-foreground mb-4">
                A vakalatnama can be revoked by the client at any time — the right to change your legal representative is a fundamental aspect of access to justice. Here is how revocation works in practice:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Client-initiated revocation</p>
                  <p className="text-muted-foreground text-sm mt-1">You must send a written revocation notice to both the court (filing it on record) and to your existing advocate. Once the court records the revocation, your advocate ceases to have authority to act for you. You can then execute a fresh vakalatnama in favour of a new advocate and file it with the court. Proceedings continue from the point they were.</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-foreground">Advocate-initiated withdrawal</p>
                  <p className="text-muted-foreground text-sm mt-1">An advocate can also withdraw from a case, but they need the court's permission to do so. They must file an application to discharge themselves and give reasonable notice to the client so the client has time to engage a new lawyer. Courts generally grant such applications unless withdrawal at that stage would seriously prejudice the client.</p>
                </div>
                <div className="border-l-4 border-muted pl-4">
                  <p className="font-semibold text-foreground">What happens to the ongoing case?</p>
                  <p className="text-muted-foreground text-sm mt-1">Revocation of a vakalatnama does not affect the case itself — it only changes who represents you. The case continues. The court will usually grant a short adjournment (called a "date") to allow you time to engage new counsel and for the new advocate to get up to speed. Ensure you have copies of all documents filed in the case before changing lawyers.</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 text-sm">
                Note: Any fees already paid to the outgoing advocate may not be refundable depending on the terms of your retainer agreement. Clarify fee refund terms upfront when engaging an advocate.
              </p>
            </div>

            {/* Section 8 — Conversion CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">
                Want to Appoint a Verified Advocate?
              </h2>
              <p className="text-muted-foreground mb-2">
                Finding the right lawyer for your case is the first step — and the most important one. vakiltech connects you with verified, Bar Council-enrolled advocates across India. Talk to one now for just <strong className="text-foreground">₹299</strong>.
              </p>
              <p className="text-muted-foreground mb-5 text-sm">
                Once you select your advocate, they will prepare the vakalatnama, procure the correct stamp paper, and handle all court filings — you just need to sign.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/find-a-lawyer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Find the Right Lawyer <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Or Book a Consultation Directly
                </Link>
              </div>
            </div>

          </div>
        </article>

        {faqs.length > 0 && (
          <FAQSection faqs={faqs} title="Frequently Asked Questions about Vakalatnama" />
        )}
      </div>
    </>
  );
}
