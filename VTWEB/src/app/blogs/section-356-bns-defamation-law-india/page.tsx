import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { FAQSection } from "@/components/shared/faq-section";

export const metadata: Metadata = {
  title: "Section 356 BNS (Criminal Defamation) Explained | vakiltech",
  description:
    "Section 356 of BNS replaces IPC 499/500 for criminal defamation. Learn elements, punishment, landmark cases, and how to send a defamation legal notice. (Read in 8 min)",
  keywords: [
    "section 356 bns",
    "356 bns",
    "bns 356",
    "defamation in bns",
    "defamation under bns",
    "criminal defamation in bns",
    "what is section 356 bns",
    "bns defamation law india",
    "criminal defamation india 2024",
    "defamation legal notice india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/blogs/section-356-bns-defamation-law-india",
  },
};

export default function Section356BNSBlog() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "Section 356 BNS — Criminal Defamation", current: true },
  ];

  const faqs = [
    {
      question: "What is Section 356 BNS?",
      answer:
        "Section 356 of the Bharatiya Nyaya Sanhita (BNS) 2023 defines and punishes criminal defamation in India. It replaced Sections 499 and 500 of the Indian Penal Code (IPC) when BNS came into force on 1 July 2024. The section makes it an offence to make or publish any false imputation about a person with the intent to harm their reputation.",
    },
    {
      question: "What is the punishment for defamation under BNS 356?",
      answer:
        "Section 356 BNS prescribes simple imprisonment of up to 2 years, or a fine, or both. The offence is bailable and compoundable (meaning the parties can settle out of court, allowing the case to be withdrawn).",
    },
    {
      question: "What replaced IPC 499 and 500 in the new law?",
      answer:
        "Section 356 of the Bharatiya Nyaya Sanhita (BNS) 2023 replaces both Section 499 (definition of defamation) and Section 500 (punishment for defamation) of the Indian Penal Code 1860. The BNS came into force on 1 July 2024.",
    },
    {
      question: "What are the elements of criminal defamation under BNS 356?",
      answer:
        "To constitute criminal defamation under Section 356 BNS, four elements must be present: (1) a statement was made or published — in words spoken, written, signs, or visible representations; (2) the statement imputes something about a specific identifiable person; (3) the imputation was made with intent to harm reputation, or with knowledge that it would do so; and (4) the imputation actually harmed or was likely to harm the person's reputation.",
    },
    {
      question: "Is truth a defence to defamation under BNS 356?",
      answer:
        "Yes, but with a condition. Truth is a defence under Exception 1 of Section 356 BNS only if the imputation was made for the public good. Stating a true but private fact that serves no public purpose does not automatically constitute a valid defence under Indian criminal defamation law.",
    },
    {
      question: "Does Section 356 BNS apply to online and social media defamation?",
      answer:
        "Yes. The BNS applies to statements made by any means — spoken, written, signs, or visible representations — which includes social media posts, WhatsApp messages, YouTube videos, tweets, and any other digital communication. Online defamation can lead to prosecution under Section 356 BNS.",
    },
    {
      question: "What is the difference between civil and criminal defamation in India?",
      answer:
        "Criminal defamation under BNS 356 is a criminal offence where the state (via a magistrate's court) prosecutes the accused; the remedy is imprisonment or fine. Civil defamation is a tort claim filed by the aggrieved party in a civil court seeking monetary damages. Both can run simultaneously — a person can send a legal notice for civil damages and also file a criminal complaint under BNS 356.",
    },
    {
      question: "Can I send a legal notice for defamation under BNS 356?",
      answer:
        "Yes. A defamation legal notice is the recommended first step. It formally demands the person retract the defamatory statement, publish an apology, and pay compensation — before you take the matter to court. vakiltech sends defamation legal notices drafted by Supreme Court advocates for ₹1,499, delivered by registered post within 24 hours.",
    },
    {
      question: "Is defamation under BNS 356 a bailable offence?",
      answer:
        "Yes. Criminal defamation under Section 356 BNS is a bailable, non-cognisable, and compoundable offence. This means police cannot arrest the accused without a warrant; a court warrant is required to arrest, and the parties can settle the matter before trial.",
    },
    {
      question: "How do I file a criminal defamation complaint under BNS 356?",
      answer:
        "You must file a complaint directly before a Magistrate (not a police station FIR, since the offence is non-cognisable). The Magistrate will take cognisance and summon the accused. It is strongly recommended to first send a legal notice giving the person an opportunity to retract and apologise, as courts look favourably on this pre-litigation step.",
    },
    {
      question: "What is the difference between defamation and criticism under BNS 356?",
      answer:
        "Fair comment on a person's public conduct, artistic work, or matter of public interest does not constitute defamation under BNS 356 (Exception 9). However, the comment must be based on facts and made in good faith. Malicious and false statements framed as 'opinions' are not protected.",
    },
    {
      question: "Can a company or organisation be defamed under BNS 356?",
      answer:
        "Yes. Although the BNS 356 primarily refers to defamation 'concerning any person', Indian courts have consistently held that companies and organisations have a reputation that can be defamed. An authorised officer of the company can file a defamation complaint on the company's behalf.",
    },
  ];

  return (
    <>
      {/* BreadcrumbList Schema */}
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Section 356 BNS — Criminal Defamation Law in India: Complete 2026 Guide",
            description:
              "Section 356 of BNS replaces IPC 499/500 for criminal defamation. Learn elements, punishment, landmark cases, and how to send a defamation legal notice.",
            author: { "@type": "Organization", name: "vakiltech Legal Team" },
            publisher: {
              "@type": "Organization",
              name: "vakiltech",
              logo: { "@type": "ImageObject", url: "https://vakiltech.in/logo.png" },
            },
            datePublished: "2026-04-24T00:00:00+05:30",
            dateModified: "2026-04-24T00:00:00+05:30",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://vakiltech.in/blogs/section-356-bns-defamation-law-india",
            },
          }),
        }}
      />
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
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
              Section 356 BNS — Criminal Defamation Law in India: Complete 2026 Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Section 356 of the Bharatiya Nyaya Sanhita (BNS) 2023 is India&apos;s current law on criminal
              defamation — replacing IPC Sections 499 and 500. This guide explains what BNS 356 covers,
              its elements, exceptions, punishment, how it differs from the old IPC, and what to do if
              someone defames you.
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
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  8 min read
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90 space-y-8">

            {/* H2 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">What is Section 356 BNS?</h2>
              <p className="text-muted-foreground mb-4">
                Section 356 of the Bharatiya Nyaya Sanhita (BNS) 2023 defines and punishes criminal
                defamation in India. When the BNS came into force on <strong>1 July 2024</strong>, it
                replaced the entire Indian Penal Code 1860 — including Sections 499 and 500, which
                previously governed defamation.
              </p>
              <p className="text-muted-foreground mb-4">
                In plain terms, a person commits criminal defamation under BNS 356 when they make or
                publish a false statement about another person — through words spoken, written, signs,
                or visible representations — intending to harm that person&apos;s reputation, or knowing
                that the statement will do so.
              </p>
              <p className="text-muted-foreground">
                The offence is <strong>bailable, non-cognisable, and compoundable</strong>, meaning
                it requires a court complaint (not a police FIR), the parties can negotiate and
                withdraw the case before trial, and the accused can get bail as of right.
              </p>
            </div>

            {/* H2 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How BNS 356 Differs from IPC 499/500
              </h2>
              <p className="text-muted-foreground mb-4">
                The shift from IPC to BNS was primarily a structural consolidation. The substantive
                law of defamation has not changed dramatically, but there are key differences worth
                understanding:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Aspect</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">IPC (old law)</th>
                      <th className="text-left py-2 text-foreground font-semibold">BNS 356 (current)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Section number</td>
                      <td className="py-2 pr-4">Sections 499 (definition) + 500 (punishment)</td>
                      <td className="py-2">Single section: Section 356</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Definition</td>
                      <td className="py-2 pr-4">Imputation concerning a person with intent to harm reputation</td>
                      <td className="py-2">Identical — same elements preserved</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Punishment</td>
                      <td className="py-2 pr-4">2 years simple imprisonment, or fine, or both</td>
                      <td className="py-2">Same — 2 years SI, or fine, or both</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Exceptions</td>
                      <td className="py-2 pr-4">10 exceptions under IPC 499</td>
                      <td className="py-2">Same 10 exceptions — substantively unchanged</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Digital applicability</td>
                      <td className="py-2 pr-4">Implied via IT Act crossover</td>
                      <td className="py-2">Explicit — includes all forms of representation</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">In force since</td>
                      <td className="py-2 pr-4">1860 (until 30 June 2024)</td>
                      <td className="py-2">1 July 2024 onwards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4">
                All pending cases that were filed under IPC 499/500 before 1 July 2024 continue under
                the old provisions. New complaints filed after that date must invoke BNS 356.
              </p>
            </div>

            {/* H2 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Elements of Criminal Defamation Under BNS 356
              </h2>
              <p className="text-muted-foreground mb-4">
                To constitute criminal defamation under Section 356 BNS, four essential elements must
                all be present. A complaint will fail if any one is missing:
              </p>
              <ol className="space-y-5 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground">Imputation of fact about a person.</strong> The
                    statement must relate to a specific, identifiable person — not a vague or general group.
                    The imputation must be of a factual nature, not a mere expression of opinion. Calling
                    someone &quot;incompetent&quot; as a pure opinion may not suffice; stating they &quot;forged
                    documents&quot; is an imputation of fact.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground">Made or published.</strong> The statement must be
                    communicated to at least one person other than the person defamed. A statement made
                    solely to the defamed person (with no third party present) does not meet this element.
                    Publication includes speaking in public, posting on social media, sending a group
                    message, or publishing in print or online.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-foreground">Intent to harm reputation, or knowledge that it will.</strong> The
                    accused must have intended to harm the reputation of the person, or known or had
                    reason to believe the statement would do so. This is the mental element (mens rea).
                    Accidental or unwitting statements made in good faith may not satisfy this element.
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-foreground">Harm to reputation (actual or likely).</strong> The
                    imputation must lower the person in the estimation of right-thinking members of society,
                    or expose them to hatred, contempt, or ridicule. This is assessed objectively — courts
                    look at whether a reasonable person would consider the statement capable of damaging
                    the complainant&apos;s reputation.
                  </div>
                </li>
              </ol>
            </div>

            {/* H2 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Punishment Under Section 356 BNS
              </h2>
              <p className="text-muted-foreground mb-4">
                Section 356 BNS prescribes the following punishment for criminal defamation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">2 years</p>
                  <p className="text-sm text-muted-foreground">Maximum simple imprisonment</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">Fine</p>
                  <p className="text-sm text-muted-foreground">Amount at court&apos;s discretion</p>
                </div>
                <div className="bg-background border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary mb-1">Both</p>
                  <p className="text-sm text-muted-foreground">Imprisonment + fine</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-3">Key characteristics of the offence:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">Bailable:</strong> The accused is entitled to bail as a matter of right. Police cannot detain without bail.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">Non-cognisable:</strong> Police cannot arrest the accused without a court warrant. The complainant must approach a Magistrate, not a police station.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">→</span><span><strong className="text-foreground">Compoundable:</strong> The case can be settled and withdrawn with the Magistrate&apos;s permission — making pre-litigation settlements (via legal notices) especially effective.</span></li>
              </ul>
            </div>

            {/* H2 5 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Exceptions to Defamation Under BNS 356 — All 10 Listed
              </h2>
              <p className="text-muted-foreground mb-4">
                Section 356 BNS preserves all 10 exceptions from IPC 499. If any of these exceptions
                apply, the statement does not constitute defamation even if all four elements are
                otherwise met:
              </p>
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <div><strong className="text-foreground">Truth for public good.</strong> Imputation of true facts is not defamation if made for the public good. Truth alone is not enough — the public benefit must be demonstrable. (Exception 1)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <div><strong className="text-foreground">Opinion on public conduct of a public servant.</strong> Fair comment on the conduct of a public servant in the discharge of public duties, or on their character insofar as it appears in that conduct, is not defamation. (Exception 2)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <div><strong className="text-foreground">Opinion on conduct of a person touching a public question.</strong> Fair comment in good faith on any person&apos;s conduct in respect of a public question is not defamation. (Exception 3)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                  <div><strong className="text-foreground">Fair report of court proceedings.</strong> Publication of a substantially true report of court proceedings, or the result of a court case, is not defamation. (Exception 4)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                  <div><strong className="text-foreground">Merits of a case decided by a court.</strong> Expressing an opinion in good faith on the merits of a case decided by a court, or on the conduct of the parties, witnesses, or advocates, is not defamation. (Exception 5)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">6</span>
                  <div><strong className="text-foreground">Fair comment on literary or artistic work.</strong> In good faith criticism of the merits of a published book, painting, musical composition, or public performance is not defamation. (Exception 6)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">7</span>
                  <div><strong className="text-foreground">Censure in good faith by a person with lawful authority.</strong> Censure passed in good faith by a person who has lawful authority over another (e.g., an employer giving a performance review) is not defamation. (Exception 7)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">8</span>
                  <div><strong className="text-foreground">Accusation made in good faith to a lawful authority.</strong> Making an accusation to an authorised body (e.g., a complaint to the police or a regulator) in good faith is not defamation. (Exception 8)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">9</span>
                  <div><strong className="text-foreground">Imputation made in good faith for protection of interests.</strong> An imputation made in good faith for the protection of the interests of the person making it, or for the public good, is not defamation. (Exception 9)</div>
                </li>
                <li className="flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">10</span>
                  <div><strong className="text-foreground">Caution made in good faith.</strong> A caution given in good faith to a person about another, for the good of the person being cautioned or for the public good, is not defamation. (Exception 10)</div>
                </li>
              </ol>
              <p className="text-muted-foreground mt-4 text-sm">
                The burden to prove an exception lies on the accused. Claiming an exception is an
                affirmative defence — the accused must demonstrate it applies.
              </p>
            </div>

            {/* H2 6 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Landmark Defamation Cases in India (Recent)
              </h2>
              <p className="text-muted-foreground mb-4">
                These cases shaped how defamation law is applied in India — many decided under IPC
                499/500 but with principles fully applicable under BNS 356:
              </p>
              <div className="space-y-5">
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Subramanian Swamy v. Union of India (2016, Supreme Court)</p>
                  <p className="text-muted-foreground text-sm mt-1">The Supreme Court upheld the constitutionality of criminal defamation under IPC 499/500, ruling that the right to reputation is part of Article 21 (right to life and personal liberty) and that criminal defamation does not unconstitutionally restrict free speech under Article 19(1)(a). This landmark ruling remains fully applicable to BNS 356 proceedings.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Mohammed Akbar v. State of MP (Madhya Pradesh HC, 2023)</p>
                  <p className="text-muted-foreground text-sm mt-1">The High Court reiterated that for a defamation complaint to proceed, the complaint must specifically allege the exact words used, the persons to whom the statement was published, and the manner in which the accused intended to harm the complainant&apos;s reputation. Vague or omnibus allegations are not sufficient.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Kiran Bedi v. Committee of Inquiry (Supreme Court)</p>
                  <p className="text-muted-foreground text-sm mt-1">Established that public figures must bear a higher level of scrutiny and criticism of their public conduct, consistent with Exception 2. However, statements that cross into allegations of personal misconduct unrelated to public duties can still constitute defamation.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-semibold text-foreground">Social media defamation — post-BNS trend (2024–2025)</p>
                  <p className="text-muted-foreground text-sm mt-1">Since BNS came into force in July 2024, courts across India have seen a rise in defamation complaints arising from WhatsApp group messages and social media posts. Magistrate courts have consistently held that publication in a WhatsApp group satisfies the &quot;publication to a third party&quot; element of Section 356 BNS.</p>
                </div>
              </div>
            </div>

            {/* H2 7 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Civil vs Criminal Defamation — Which Route for Which Case?
              </h2>
              <p className="text-muted-foreground mb-4">
                India allows both criminal prosecution under BNS 356 and a civil tort claim for
                defamation simultaneously. Here is how to decide:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Factor</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Civil Defamation</th>
                      <th className="text-left py-2 text-foreground font-semibold">Criminal Defamation (BNS 356)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Remedy sought</td><td className="py-2 pr-4">Money damages, injunction</td><td className="py-2">Imprisonment, fine, public accountability</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Who files</td><td className="py-2 pr-4">The aggrieved party (civil suit)</td><td className="py-2">The aggrieved party (Magistrate complaint)</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Burden of proof</td><td className="py-2 pr-4">Balance of probabilities</td><td className="py-2">Beyond reasonable doubt</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Cost</td><td className="py-2 pr-4">Higher (civil suit filing fees, court time)</td><td className="py-2">Lower initial cost (Magistrate complaint)</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Outcome if successful</td><td className="py-2 pr-4">Financial compensation</td><td className="py-2">Criminal record, imprisonment possible</td></tr>
                    <tr><td className="py-2 pr-4 font-medium text-foreground">Best used when</td><td className="py-2 pr-4">You want financial compensation for losses</td><td className="py-2">You want deterrence and public accountability</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4">
                <strong className="text-foreground">Practical advice:</strong> In most cases, the first
                step — regardless of which route you ultimately take — is to send a formal defamation
                legal notice. This gives the other party an opportunity to retract and apologise,
                which is often the fastest resolution. A well-drafted notice also creates the evidentiary
                record you need for either a civil suit or a criminal complaint.
              </p>
            </div>

            {/* H2 8 — CTA to Action page */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                How to Send a Defamation Legal Notice Under BNS 356
              </h2>
              <p className="text-muted-foreground mb-4">
                Before filing a criminal complaint or civil suit, sending a defamation legal notice is
                strongly recommended — and in many cases leads to a faster resolution. Here is the process:
              </p>
              <ol className="space-y-3 text-muted-foreground mb-6">
                <li className="flex gap-3"><span className="text-primary font-bold">1.</span><span>Document the defamatory statement — screenshots, recordings, published material — with date and context.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">2.</span><span>Have a qualified advocate draft a formal notice citing Section 356 BNS, stating the exact statement, demanding retraction, a public apology, and compensation within 15–30 days.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">3.</span><span>Send the notice via Speed Post / RPAD to the respondent&apos;s last known address. Courts presume delivery once posted.</span></li>
                <li className="flex gap-3"><span className="text-primary font-bold">4.</span><span>If the respondent complies — retracts and apologises — the matter ends here. If not, you proceed to file a Magistrate complaint or civil suit.</span></li>
              </ol>
              <p className="text-muted-foreground mb-6">
                vakiltech&apos;s advocates draft defamation legal notices citing the exact BNS provisions, with
                the correct demands and a firm tone — delivered by registered post within 24 hours.
              </p>
              {/* Action CTA box */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <p className="font-bold text-foreground mb-2">Send Defamation Legal Notice — ₹1,499</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Drafted by Supreme Court advocates. Citing BNS 356. Delivered by registered post in
                  24 hours. Full tracking included.
                </p>
                <Link
                  href="/send-legal-notice/criminal-defamation-legal-notice"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Defamation Legal Notice <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related reads */}
            <div className="bg-muted/40 border border-border rounded-xl p-5">
              <p className="text-sm font-semibold text-foreground mb-3">Related guides</p>
              <div className="space-y-2">
                <Link
                  href="/blogs/what-is-a-legal-notice-in-india"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  What is a Legal Notice in India?
                </Link>
                <Link
                  href="/blogs/legal-notice-fees-india"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <ArrowRight className="w-3 h-3" />
                  Legal Notice Fees in India — What You Actually Pay
                </Link>
              </div>
            </div>

          </div>
        </article>

        {faqs.length > 0 && (
          <FAQSection faqs={faqs} title="Frequently Asked Questions — Section 356 BNS" />
        )}
      </div>
    </>
  );
}
