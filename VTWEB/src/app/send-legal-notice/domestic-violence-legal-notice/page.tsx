import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Domestic Violence? | Send PWDVA Notice | Start at ₹499",
  description: "Facing domestic violence? Get a confidential PWDVA protection notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.",
  keywords: ["domestic violence legal notice","PWDVA legal notice","protection order notice","dowry harassment notice","domestic abuse legal action"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/domestic-violence-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Domestic Violence?", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "What is domestic violence under PWDVA 2005?",
    "answer": "PWDVA 2005 defines domestic violence broadly: physical abuse (hitting, slapping, burning), sexual abuse (forced sexual acts, marital rape), verbal and emotional abuse (insults, threats, intimidation), economic abuse (denying money, preventing employment), and dowry harassment. It includes any harm or injury causing danger to life, limb, health, or well-being."
  },
  {
    "question": "Who is protected under Domestic Violence Act?",
    "answer": "PWDVA protects: wives (married or divorcing), live-in partners in relationships in the nature of marriage, sisters and mothers living in shared household, female children, and women in any domestic relationship. Protection is against violence by husband, male partners, or relatives of husband."
  },
  {
    "question": "How quickly can I get protection orders?",
    "answer": "Protection orders can be obtained within 3-7 days of filing complaint as interim relief. Magistrate can pass ex-parte protection and residence orders immediately if situation is urgent. This is much faster than other legal remedies. Final hearing typically takes 3-6 months, but interim orders provide immediate protection."
  },
  {
    "question": "Can I stay in the matrimonial home?",
    "answer": "Yes. Under PWDVA, you have absolute right to reside in the 'shared household' (matrimonial home) regardless of ownership. Husband cannot evict you. You can obtain residence order directing husband to allow you to stay or provide alternate accommodation. Violating residence order is punishable with imprisonment."
  },
  {
    "question": "How much maintenance can I claim?",
    "answer": "Maintenance amount depends on: husband's income and assets, your needs and standard of living during marriage, children's needs, and reasonable living expenses. Typically 25-30% of husband's income for wife plus 15-20% per child. Additionally, can claim medical expenses, compensation for injuries (₹5-20 lakhs), and cost of litigation."
  },
  {
    "question": "Should I file PWDVA complaint or criminal FIR?",
    "answer": "Ideally both. PWDVA is civil remedy providing protection, residence, maintenance, custody, and compensation quickly. Criminal FIR under Section 85 BNS (cruelty) and Section 75-76 BNS (dowry) results in arrest and prosecution. PWDVA is faster for immediate relief, while criminal case adds pressure for settlement. Most lawyers recommend both simultaneously."
  },
  {
    "question": "Can I take action against in-laws?",
    "answer": "Yes. PWDVA covers violence by husband's relatives. You can name mother-in-law, father-in-law, and other relatives as respondents. They can be subject to protection orders and compensation. Additionally, criminal action under Section 85 BNS specifically covers cruelty by 'husband or his relatives'."
  },
  {
    "question": "How much does domestic violence notice cost?",
    "answer": "vakiltech offers domestic violence legal notice services for ₹1,499, including: consultation on PWDVA rights, professional drafting with specific incidents documented, medical/evidence review, demands for protection/residence/maintenance/compensation, unlimited revisions, registered post delivery, and guidance on filing PWDVA complaint if needed."
  }
];

  return (
    <>
    {/* schema-migrated */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"vakiltech","legalName":"vakiltech Legal Services","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","foundingDate":"2023","description":"India's leading online legal services platform providing affordable legal notices, consultations, and agreement drafting services through experienced Licensed Advocates.","address":{"@type":"PostalAddress","addressCountry":"IN"},"contactPoint":[{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"],"areaServed":"IN"}],"sameAs":[],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500","bestRating":"5","worstRating":"1"},"makesOffer":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Notice Services","description":"Professional legal notice drafting and sending"},"price":"1499","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Consultation","description":"Expert legal consultation from Licensed Advocates"},"price":"299","priceCurrency":"INR"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Agreement Drafting","description":"Professional legal agreement drafting services"},"price":"999","priceCurrency":"INR"}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is domestic violence under PWDVA 2005?","acceptedAnswer":{"@type":"Answer","text":"PWDVA 2005 defines domestic violence broadly: physical abuse (hitting, slapping, burning), sexual abuse (forced sexual acts, marital rape), verbal and emotional abuse (insults, threats, intimidation), economic abuse (denying money, preventing employment), and dowry harassment. It includes any harm or injury causing danger to life, limb, health, or well-being."}},{"@type":"Question","name":"Who is protected under Domestic Violence Act?","acceptedAnswer":{"@type":"Answer","text":"PWDVA protects: wives (married or divorcing), live-in partners in relationships in the nature of marriage, sisters and mothers living in shared household, female children, and women in any domestic relationship. Protection is against violence by husband, male partners, or relatives of husband."}},{"@type":"Question","name":"How quickly can I get protection orders?","acceptedAnswer":{"@type":"Answer","text":"Protection orders can be obtained within 3-7 days of filing complaint as interim relief. Magistrate can pass ex-parte protection and residence orders immediately if situation is urgent. This is much faster than other legal remedies. Final hearing typically takes 3-6 months, but interim orders provide immediate protection."}},{"@type":"Question","name":"Can I stay in the matrimonial home?","acceptedAnswer":{"@type":"Answer","text":"Yes. Under PWDVA, you have absolute right to reside in the 'shared household' (matrimonial home) regardless of ownership. Husband cannot evict you. You can obtain residence order directing husband to allow you to stay or provide alternate accommodation. Violating residence order is punishable with imprisonment."}},{"@type":"Question","name":"How much maintenance can I claim?","acceptedAnswer":{"@type":"Answer","text":"Maintenance amount depends on: husband's income and assets, your needs and standard of living during marriage, children's needs, and reasonable living expenses. Typically 25-30% of husband's income for wife plus 15-20% per child. Additionally, can claim medical expenses, compensation for injuries (₹5-20 lakhs), and cost of litigation."}},{"@type":"Question","name":"Should I file PWDVA complaint or criminal FIR?","acceptedAnswer":{"@type":"Answer","text":"Ideally both. PWDVA is civil remedy providing protection, residence, maintenance, custody, and compensation quickly. Criminal FIR under Section 85 BNS (cruelty) and Section 75-76 BNS (dowry) results in arrest and prosecution. PWDVA is faster for immediate relief, while criminal case adds pressure for settlement. Most lawyers recommend both simultaneously."}},{"@type":"Question","name":"Can I take action against in-laws?","acceptedAnswer":{"@type":"Answer","text":"Yes. PWDVA covers violence by husband's relatives. You can name mother-in-law, father-in-law, and other relatives as respondents. They can be subject to protection orders and compensation. Additionally, criminal action under Section 85 BNS specifically covers cruelty by 'husband or his relatives'."}},{"@type":"Question","name":"How much does domestic violence notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech offers domestic violence legal notice services for ₹1,499, including: consultation on PWDVA rights, professional drafting with specific incidents documented, medical/evidence review, demands for protection/residence/maintenance/compensation, unlimited revisions, registered post delivery, and guidance on filing PWDVA complaint if needed."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Domestic Violence","description":"Facing domestic violence? Get a confidential PWDVA protection notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/domestic-violence-legal-notice","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Domestic Violence? | Send PWDVA Notice | Start at ₹499","description":"Facing domestic violence? Get a confidential PWDVA protection notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.","url":"https://vakiltech.in/send-legal-notice/domestic-violence-legal-notice","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Domestic Violence","description":"If you're suffering physical, mental, sexual, or economic abuse from your husband or in-laws, the Protection of Women from Domestic Violence Act 2005 (PWDVA) provides comprehensive legal protection. This notice demands immediate cessation of violence, protection orders, residence rights, maintenance, and compensation. You can obtain protection orders within days from Magistrate Court.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
    />

    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      
      <div className="container mx-auto px-6 md:px-8 pb-8">
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
            <div className="z-10 mt-2 mb-2">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Professional Legal Service
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Domestic Violence?
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Facing domestic violence? Get a confidential PWDVA protection notice sent today. Pay ₹499 to start + 2-hr callback. Approve the draft before paying ₹1000.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/send-a-legal-notice"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Process
                  </Link>
                  <Link
                    href="/legal-consultation"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                  <img
                    src="/legal-notice/lawyer-customer-desk.svg"
                    alt="Legal notice drafted by vakiltech advocates"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Before You Spend ₹1,499 — Check If Your Case Is Worth It</h2>
<p className="text-muted-foreground mb-4">Many legal notices fail due to weak facts or missing proof. Our lawyer-logic tool helps you avoid wasting money.</p>
<p className="text-muted-foreground mb-4">"Example result for a money recovery dispute with written proof"</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What is a Legal Notice for Domestic Violence?</h2>
<p className="text-muted-foreground mb-4">A legal notice for domestic violence is sent by a woman who has suffered physical, mental, emotional, or economic abuse at the hands of her husband, in-laws, or domestic relationship partner. Under the Protection of Women from Domestic Violence Act 2005 (PWDVA), domestic violence is a civil and criminal offense. This notice demands immediate cessation of violence, compensation, maintenance, and protection. It's often the first step before filing a domestic violence complaint under Section 12 of PWDVA with the Magistrate.</p>
<p className="text-muted-foreground mb-4">Protects women from physical, mental, sexual, economic violence</p>
<p className="text-muted-foreground mb-4">Covers violence by husband, in-laws, or live-in partners</p>
<p className="text-muted-foreground mb-4">Civil remedy under PWDVA 2005 and criminal under IPC/BNS</p>
<p className="text-muted-foreground mb-4">Can claim residence rights, maintenance, and compensation</p>
<p className="text-muted-foreground mb-4">Protection orders can be obtained within days from Magistrate</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Constitutes Domestic Violence?</h2>
<p className="text-muted-foreground mb-4">Under PWDVA 2005, domestic violence includes a broad range of abusive conduct:</p>
<p className="text-muted-foreground mb-4">Physical Abuse: Hitting, slapping, pushing, burning, causing bodily harm</p>
<p className="text-muted-foreground mb-4">Sexual Abuse: Forced sexual acts, marital rape, sexual harassment</p>
<p className="text-muted-foreground mb-4">Verbal &amp; Emotional Abuse: Insults, humiliation, threats, intimidation</p>
<p className="text-muted-foreground mb-4">Economic Abuse: Denying money, preventing employment, disposing of property</p>
<p className="text-muted-foreground mb-4">Dowry Harassment: Demands for dowry, harassment for money from wife's family</p>
<p className="text-muted-foreground mb-4">Threats: Threats of harm, divorce, suicide, kidnapping children</p>
<p className="text-muted-foreground mb-4">Deprivation: Denying food, shelter, medical care, basic needs</p>
<p className="text-muted-foreground mb-4">Harassment of Woman to Coerce Her or Family: To meet unlawful demands</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Who is Protected Under Domestic Violence Act?</h2>
<p className="text-muted-foreground mb-4">PWDVA 2005 has a wide definition of 'aggrieved person' and 'domestic relationship':</p>
<p className="text-muted-foreground mb-4">Wives (married or in process of divorce)</p>
<p className="text-muted-foreground mb-4">Live-in partners (relationships in the nature of marriage)</p>
<p className="text-muted-foreground mb-4">Sisters, widows, mothers living in shared household</p>
<p className="text-muted-foreground mb-4">Women in relationships with men they've lived with</p>
<p className="text-muted-foreground mb-4">Female children in the household</p>
<p className="text-muted-foreground mb-4">The Act protects against violence by: husband, male partners, relatives of husband, or any male who shares the household</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Remedies Under Domestic Violence Act</h2>
<p className="text-muted-foreground mb-4">PWDVA 2005 provides comprehensive civil remedies that can be obtained quickly from Magistrate Court:</p>
<p className="text-muted-foreground mb-4">Protection Order: Prohibits respondent from committing acts of violence</p>
<p className="text-muted-foreground mb-4">Residence Order: Right to reside in shared household, can't be evicted</p>
<p className="text-muted-foreground mb-4">Monetary Relief: Maintenance, medical expenses, loss of earnings</p>
<p className="text-muted-foreground mb-4">Custody Order: Temporary custody of children</p>
<p className="text-muted-foreground mb-4">Compensation Order: For injuries, emotional distress, property damage</p>
<p className="text-muted-foreground mb-4">These orders can be obtained within days as interim relief, even before final hearing</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Should a Domestic Violence Notice Contain?</h2>
<p className="text-muted-foreground mb-4">Your legal notice should comprehensively document the violence and assert your rights:</p>
<p className="text-muted-foreground mb-4">Your details and relationship with the respondent (husband/in-laws)</p>
<p className="text-muted-foreground mb-4">Detailed account of violence incidents with dates, times, descriptions</p>
<p className="text-muted-foreground mb-4">Nature of abuse: physical, sexual, verbal, emotional, economic</p>
<p className="text-muted-foreground mb-4">Injuries sustained with medical reports, photographs, hospital records</p>
<p className="text-muted-foreground mb-4">Witnesses who saw or heard the violence</p>
<p className="text-muted-foreground mb-4">Police complaints filed (FIR copies), if any</p>
<p className="text-muted-foreground mb-4">Economic abuse: denial of money, disposal of stridhan, preventing employment</p>
<p className="text-muted-foreground mb-4">Demand for immediate cessation of violence</p>
<p className="text-muted-foreground mb-4">Demand for right to reside in shared household</p>
<p className="text-muted-foreground mb-4">Claim for maintenance and compensation</p>
<p className="text-muted-foreground mb-4">Warning of complaint under PWDVA 2005 and criminal sections</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Criminal Action for Domestic Violence</h2>
<p className="text-muted-foreground mb-4">In addition to civil remedies under PWDVA, domestic violence can attract criminal prosecution under various sections of Bharatiya Nyaya Sanhita (BNS) 2023: Section 85 (cruelty by husband or relatives), Section 64 (rape including marital rape in certain circumstances), Section 75 (dowry death), Section 76 (dowry prohibition), Sections 115-124 (assault and causing hurt), Section 351 (criminal intimidation). These are cognizable offenses where police can arrest without warrant. FIR should be filed at police station along with PWDVA complaint for maximum legal protection.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Importance of Immediate Action</h2>
<p className="text-muted-foreground mb-4">In domestic violence cases, immediate action is critical for your safety and legal rights. Legal notices and complaints under PWDVA can result in protection orders within 3-7 days. Approximately 70-80% of women who file PWDVA complaints obtain favorable interim orders (residence rights, protection, maintenance). Many cases settle when the respondent realizes the serious legal consequences. It's crucial to: document all violence immediately, seek medical treatment (creates evidence), file police complaint (FIR), reach out to Protection Officer or NGO for support, and send legal notice followed by PWDVA complaint. Do not delay action out of fear or family pressure—your safety and rights are paramount.</p>
<p className="text-muted-foreground mb-4">Your safety and dignity matter. Don't suffer in silence. Take legal action to protect yourself and your children.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Protection Order Obtained in5 Days</h2>
<p className="text-muted-foreground mb-4">Meera faced severe physical abuse and was thrown out of her matrimonial home. After sending legal notice and filing PWDVA complaint, she obtained protection order and residence order within 5 days, allowing her to return home safely. The court also ordered ₹40,000 monthly maintenance and ₹15 lakhs compensation.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fast Protection Orders</li>
</ul>
<p className="text-muted-foreground mb-4">Can obtain protection and residence orders within 3-7 days as interim relief.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Multiple Remedies</li>
</ul>
<p className="text-muted-foreground mb-4">PWDVA provides protection, residence, maintenance, custody, and compensation in one proceeding.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Financial Support</li>
</ul>
<p className="text-muted-foreground mb-4">Can claim maintenance, medical expenses, compensation for injuries and trauma.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">How We Work</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>You Tell Us</li>
</ul>
<p className="text-muted-foreground mb-4">Answer simple questions. Upload documents. Done in 5 mins.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>We Draft</li>
</ul>
<p className="text-muted-foreground mb-4">Expert lawyers draft your notice. You review and approve.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>We Send</li>
</ul>
<p className="text-muted-foreground mb-4">Sent via Speed Post with tracking ID.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Roadmap: What Happens After Sending the Notice?</h2>
<p className="text-muted-foreground mb-4">Clear next steps based on how the other party responds</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Assurance</li>
</ul>
<p className="text-muted-foreground mb-4">They may offer written assurance to stop violence. Accept ONLY if you feel safe.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Safe Exit</li>
</ul>
<p className="text-muted-foreground mb-4">If needed, negotiate a safe retrieval of your belongings (Stridhan) and documents.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File DV Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">File a complaint under PWDVA 2005 before the Magistrate for Protection &amp; Residence.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Police Complaint</li>
</ul>
<p className="text-muted-foreground mb-4">File an FIR under Section 85 BNS (Cruelty) at the nearest police station.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">PWDVA 2005 andCriminal Laws</h2>
<p className="text-muted-foreground mb-4">Domestic violence is covered under PWDVA 2005 (civil remedy) and BNS 2023 (criminal action). Section 85 BNS criminalizes cruelty by husband and relatives.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">70-80% of women filing PWDVA complaints obtain favorable interim orders within days. Immediate action is critical for safety.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>⚖️Legal Remedies Under PWDVA 2005</li>
</ul>
<p className="text-muted-foreground mb-4">Draft Notice Now</p>
<p className="text-muted-foreground mb-4">Expert drafting in 48 hours</p>
<p className="text-muted-foreground mb-4">Talk to a Lawyer</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why vakiltech!</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Expert Drafted</li>
</ul>
<p className="text-muted-foreground mb-4">Valid in all Indian courts.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Zero Court Visits</li>
</ul>
<p className="text-muted-foreground mb-4">100% digital process.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Ready in 24 Hrs</li>
</ul>
<p className="text-muted-foreground mb-4">Fastest turnaround.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Save 80% Cost</li>
</ul>
<p className="text-muted-foreground mb-4">Transparent ₹1,499 pricing.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Why Choose vakiltech?</h2>
<p className="text-muted-foreground mb-4">We combine the expertise of top lawyers with the convenience of technology.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Domestic Violence Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for domestic violence.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Domestic Violence</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Domestic Violence Drafted</h2>
<p className="text-muted-foreground mb-4">Fill out the form below to get started</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
<p className="text-muted-foreground mb-4">No hidden charges, pay only for what you need</p>
<p className="text-muted-foreground mb-4">Unlimited Revisions</p>
<p className="text-muted-foreground mb-4">24/7 Support</p>
<p className="text-muted-foreground mb-4">Legal Consultation</p>
<p className="text-muted-foreground mb-4">Free consultation</p>
<p className="text-muted-foreground mb-4">Legal notice drafted</p>
<p className="text-muted-foreground mb-4">After your approval</p>
<p className="text-muted-foreground mb-4">We send the notice</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Other Family Law Legal Notices</h2>
<p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialized options.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Divorce Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Legal notice for divorce proceedings in India.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Maintenance Claim</li>
</ul>
<p className="text-muted-foreground mb-4">Claim maintenance for wife, children, or parents.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Cruelty or Desertion</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action for matrimonial cruelty or desertion.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Child Custody</li>
</ul>
<p className="text-muted-foreground mb-4">Legal notice for child custody matters.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Money Recovery</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid dues, loans, or business payments legally.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Cheque Bounce</li>
</ul>
<p className="text-muted-foreground mb-4">Legal action under Section 138 for dishonoured cheques.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Real People. Real Results.</h2>
<p className="text-muted-foreground mb-4">My landlord refused to return my ₹45,000 security deposit for months. After sending the legal notice through vakiltech, he returned the full amount within 10 days. The draft was very strong.Rohan MalhotraSoftware Engineer, Bangalore</p>
<p className="text-muted-foreground mb-4">A builder in Noida was delaying possession by 2 years. I sent a legal notice for refund with interest. They finally called me for a settlement meeting. Highly recommended for property issues.Suresh GuptaGovernment Employee, Delhi</p>
<p className="text-muted-foreground mb-4">I was not getting my salary dues from my previous employer. The legal notice drafted by vakiltech showed I was serious. They cleared my dues to avoid court trouble. Thank you!Anjali DesaiMarketing Executive, Mumbai</p>
<p className="text-muted-foreground mb-4">Standard legal notice for cheque bounce. The process was simple, and the lawyer added all necessary sections under the NI Act. Very professional service.Vikramjit SinghBusiness Owner, Ludhiana</p>
<p className="text-muted-foreground mb-4">Bought a defective fridge and the company wasn't replacing it. Sent a consumer notice. They replaced it immediately after receiving the notice. Fast and effective.Meera NairHomemaker, Kochi</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for domestic violence</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>What is domestic violence under PWDVA 2005?</li>
<li>Who is protected under Domestic Violence Act?</li>
<li>How quickly can I get protection orders?</li>
<li>Can I stay in the matrimonial home?</li>
<li>How much maintenance can I claim?</li>
<li>Should I file PWDVA complaint or criminal FIR?</li>
<li>Can I take action against in-laws?</li>
<li>How much does domestic violence notice cost?</li>
</ul>
</div>

        </div>
      </div>

      <TrustSignalsSection />

      {faqs.length > 0 && (
         <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
    </>
  );
}
