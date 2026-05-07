import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Legal Notice for Child Custody | Visitation Rights | ₹499",
  description: "Fighting for child custody? Send a legal notice for custody or visitation rights. Expert family lawyers, 'Best Interest of Child' focus. Start now.",
  keywords: ["legal notice for child custody","visitation rights notice","father custody rights india","child custody laws india","guardianship legal notice"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/child-custody-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Legal Notice for Child Custody", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Can a father get full custody of the child?",
    "answer": "Yes, absolutely. While courts often favor mothers for young children (under 5), a father can get full custody if he proves the mother is unfit (abusive, neglecting, mentally unstable) or if the child (if older) prefers the father. Increasing number of fathers are winning custody battles in India today."
  },
  {
    "question": "What if I just want to see my child, not full custody?",
    "answer": "You should seek 'Visitation Rights'. Even if the other parent has physical custody, you have a legal right to meet your child regularly (e.g., weekends, birthdays, holidays). A legal notice is the best way to demand a structured visitation schedule."
  },
  {
    "question": "Does the child's wish matter?",
    "answer": "Yes. If the child is old enough (usually 9 years or older) to form an intelligent preference, the court will interview the child and give significant weight to their wish. However, the court strictly ensures the child hasn't been tutored or brainwashed by one parent."
  },
  {
    "question": "Is mother's custody automatic?",
    "answer": "No. While there is a presumption in favor of the mother for infants and toddlers ('Tender Years Doctrine'), it is not absolute. If the mother cannot provide a safe or stable environment, custody can be given to the father or grandparents."
  },
  {
    "question": "What is Joint Custody? Is it allowed in India?",
    "answer": "Joint Custody means both parents share the responsibility. While the child effectively lives with one parent (primary custodian), the other parent gets significant visitation time and decision-making power. Indian courts are increasingly moving towards this model to ensure the child gets love from both parents."
  },
  {
    "question": "How much does a custody notice cost?",
    "answer": "vakiltech charges ₹1,499. This includes a consultation to understand your specific situation (denial of access, unfit spouse, etc.), drafting a notice prioritizing the 'Best Interest of the Child', and dispatch via Registered Post."
  },
  {
    "question": "Can grandparents claim custody?",
    "answer": "Yes, in certain tragic circumstances (death of parents) or if both parents are proven unfit/abusive, a court can award custody to grandparents to ensure the child's safety and welfare."
  },
  {
    "question": "Can my spouse take the child abroad without my consent?",
    "answer": "No. Taking a child out of the court's jurisdiction or to another country without the other parent's consent (or court permission) can be considered child abduction. You should immediately send a legal notice and file for an injunction to stop this."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can a father get full custody of the child?","acceptedAnswer":{"@type":"Answer","text":"Yes, absolutely. While courts often favor mothers for young children (under 5), a father can get full custody if he proves the mother is unfit (abusive, neglecting, mentally unstable) or if the child (if older) prefers the father. Increasing number of fathers are winning custody battles in India today."}},{"@type":"Question","name":"What if I just want to see my child, not full custody?","acceptedAnswer":{"@type":"Answer","text":"You should seek 'Visitation Rights'. Even if the other parent has physical custody, you have a legal right to meet your child regularly (e.g., weekends, birthdays, holidays). A legal notice is the best way to demand a structured visitation schedule."}},{"@type":"Question","name":"Does the child's wish matter?","acceptedAnswer":{"@type":"Answer","text":"Yes. If the child is old enough (usually 9 years or older) to form an intelligent preference, the court will interview the child and give significant weight to their wish. However, the court strictly ensures the child hasn't been tutored or brainwashed by one parent."}},{"@type":"Question","name":"Is mother's custody automatic?","acceptedAnswer":{"@type":"Answer","text":"No. While there is a presumption in favor of the mother for infants and toddlers ('Tender Years Doctrine'), it is not absolute. If the mother cannot provide a safe or stable environment, custody can be given to the father or grandparents."}},{"@type":"Question","name":"What is Joint Custody? Is it allowed in India?","acceptedAnswer":{"@type":"Answer","text":"Joint Custody means both parents share the responsibility. While the child effectively lives with one parent (primary custodian), the other parent gets significant visitation time and decision-making power. Indian courts are increasingly moving towards this model to ensure the child gets love from both parents."}},{"@type":"Question","name":"How much does a custody notice cost?","acceptedAnswer":{"@type":"Answer","text":"vakiltech charges ₹1,499. This includes a consultation to understand your specific situation (denial of access, unfit spouse, etc.), drafting a notice prioritizing the 'Best Interest of the Child', and dispatch via Registered Post."}},{"@type":"Question","name":"Can grandparents claim custody?","acceptedAnswer":{"@type":"Answer","text":"Yes, in certain tragic circumstances (death of parents) or if both parents are proven unfit/abusive, a court can award custody to grandparents to ensure the child's safety and welfare."}},{"@type":"Question","name":"Can my spouse take the child abroad without my consent?","acceptedAnswer":{"@type":"Answer","text":"No. Taking a child out of the court's jurisdiction or to another country without the other parent's consent (or court permission) can be considered child abduction. You should immediately send a legal notice and file for an injunction to stop this."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Child Custody","description":"Fighting for child custody? Send a legal notice for custody or visitation rights. Expert family lawyers, 'Best Interest of Child' focus. Start now.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-child-custody","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Legal Notice for Child Custody | Visitation Rights | ₹499","description":"Fighting for child custody? Send a legal notice for custody or visitation rights. Expert family lawyers, 'Best Interest of Child' focus. Start now.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-child-custody","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Child Custody","description":"In any separation or divorce, the most critical issue is the welfare of the child. If you are being denied access to your child, or if you believe the other parent is unfit to care for them, sending a legal notice for child custody is imperative. It formally asserts your rights under the Guardians and Wards Act, 1890, and sets the stage for obtaining either full custody, joint custody, or visitation rights.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Legal Notice for Child Custody
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Fighting for child custody? Send a legal notice for custody or visitation rights. Expert family lawyers, 'Best Interest of Child' focus. Start now.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Why Send a Custody Notice?</h2>
<p className="text-muted-foreground mb-4">Sending a legal notice is a proactive step that protects your parental rights:</p>
<p className="text-muted-foreground mb-4">Asserts Your Rights: It puts on record that you are actively seeking custody and not abandoning your child.</p>
<p className="text-muted-foreground mb-4">Demands Visitation: If you are being denied access, the notice formally demands a structured visitation schedule.</p>
<p className="text-muted-foreground mb-4">Precursor to Court: It is often a necessary preliminary step to show you tried to resolve the issue before filing a Custody Petition.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Custody You Can Claim</h2>
<p className="text-muted-foreground mb-4">Understanding the different forms of custody helps in drafting a precise notice:</p>
<p className="text-muted-foreground mb-4">Physical Custody: The child lives with you primarily.</p>
<p className="text-muted-foreground mb-4">Joint Custody: The child splits time between both parents (increasingly preferred by courts for the child's welfare).</p>
<p className="text-muted-foreground mb-4">Legal Custody: You have the right to make decisions about the child's education, health, and religious upbringing.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Basis for Custody</h2>
<p className="text-muted-foreground mb-4">Courts in India decide custody based on specific legal principles:</p>
<p className="text-muted-foreground mb-4">Welfare of Child: The 'Paramount Consideration' for courts is not the parent's right, but solely the child's best interest.</p>
<p className="text-muted-foreground mb-4">Tender Years Doctrine: Usually, custody of children under 5 years is given to the mother, unless she is proven unfit.</p>
<p className="text-muted-foreground mb-4">Preference of Child: For older children (usually 9+), courts may consider the child's own preference.</p>
<p className="text-muted-foreground mb-4">Your child deserves the best care. Don't delay in asserting your parental rights.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Father Won Visitation Rights in2 Weeks</h2>
<p className="text-muted-foreground mb-4">Rahul (name changed) was completely denied access to his 5-year-old daughter by his estranged wife for 6 months. He felt helpless. We drafted a strong legal notice citing the 'welfare of the child' and his natural rights as a father. The notice made it clear that denying access is a violation of the child's rights too. Fearing a court battle where she might look unreasonable, the wife agreed to a visitation schedule (every weekend) within 2 weeks of receiving the notice.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Immediate Access</li>
</ul>
<p className="text-muted-foreground mb-4">Visitation started even before the divorce was finalized.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Joint Parenting</li>
</ul>
<p className="text-muted-foreground mb-4">Established a framework for co-parenting despite personal differences.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Avoided Toxicity</li>
</ul>
<p className="text-muted-foreground mb-4">Solved the issue without dragging the child to court hearings.</p>
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
<li>Parenting Plan</li>
</ul>
<p className="text-muted-foreground mb-4">If they agree, draft a 'Joint Parenting Plan' detailing custody and visitation schedules.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Mediation</li>
</ul>
<p className="text-muted-foreground mb-4">Go to a counselor to formalize visitation without fighting in court.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">File a Child Custody Petition (GWC Petition) in the Family Court.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Interim Relief</li>
</ul>
<p className="text-muted-foreground mb-4">File an Interim Application for immediate visitation rights while the case is pending.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Custody Laws inIndia</h2>
<p className="text-muted-foreground mb-4">Custody laws are gender-neutral in theory but focus heavily on who can provide better care.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">Financial capacity is NOT the only factor. A father cannot 'buy' custody just because he earns more. Emotional bonding and daily care matter more.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>👶Factors Courts Consider</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Child Custody Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for child custody.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Child Custody</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Child Custody Drafted</h2>
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
<li>Domestic Violence</li>
</ul>
<p className="text-muted-foreground mb-4">Protection from domestic violence.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Money Recovery</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid dues, loans, or business payments legally.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for child custody</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Can a father get full custody of the child?</li>
<li>What if I just want to see my child, not full custody?</li>
<li>Does the child's wish matter?</li>
<li>Is mother's custody automatic?</li>
<li>What is Joint Custody? Is it allowed in India?</li>
<li>How much does a custody notice cost?</li>
<li>Can grandparents claim custody?</li>
<li>Can my spouse take the child abroad without my consent?</li>
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
