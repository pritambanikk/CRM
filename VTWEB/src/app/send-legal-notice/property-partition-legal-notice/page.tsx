import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "Legal Notice for Partition of Property | Ancestral & Joint Family",
  description: "Co-owner demanding partition? Send a specialized Legal Notice for Property Partition. Claim your share in ancestral/joint family property. Starts ₹1499.",
  keywords: ["legal notice for property partition","property partition legal notice","ancestral property partition","joint property division notice","HUF property partition","partition deed notice","legal notice for division of property","ancestral property claim notice","hindu succession act partition"],
  alternates: {
    canonical: "https://vakiltech.in/send-legal-notice/property-partition-legal-notice",
  },
};

export default function GeneratedServicePage() {
const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Legal Notice for Partition of Property", current: true },
  ];

  const faqs: any[] = [
  {
    "question": "Can I sell my undivided share without partition?",
    "answer": "Legally, yes, you can sell your 'undivided share' to a third party. However, the buyer cannot take physical possession of any specific part of the house; they only step into your shoes and will have to file a partition suit to get possession. Practically, it’s hard to find buyers for undivided shares unless it's a family member."
  },
  {
    "question": "Is there a time limit to file for partition?",
    "answer": "There is no strict limitation period for filing a partition suit for ancestral property as long as your right as a co-owner exists. However, if you have been 'ousted' (denied entry/rights) hostilely for more than 12 years, you might lose your right under 'Adverse Possession.' It is crucial to send a notice immediately when your rights are denied."
  },
  {
    "question": "Does a family partition deed need valid registration?",
    "answer": "Yes. If you divide property by mutual agreement (Family Settlement), the Partition Deed must be registered on stamp paper to be legally valid and admissible in court. Unregistered deeds can be challenged. A court decree of partition, however, is a valid title document."
  },
  {
    "question": "Can we partition a property that has a bank loan?",
    "answer": "Generally, no. The bank has the first charge on the property. You must clear the loan before partitioning. However, co-owners can agree to split the loan liability along with the property, but the bank must agree to this 'novation' of contract."
  },
  {
    "question": "Can a minor demand partition?",
    "answer": "Yes, a minor coparcener can file a suit for partition through a 'next friend' or guardian if the joint family management is detrimental to the minor's interest. The court will safeguard the minor's share."
  },
  {
    "question": "How much does a partition legal notice cost?",
    "answer": "VakilTalk charges ₹1,499 for a professional Partition Notice. This includes analyzing your family tree and share entitlement, drafting the notice citing relevant succession laws, demanding accounts of income (rent/profits), and dispatching via Registered Post. It serves as strict evidence of your claim."
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
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I sell my undivided share without partition?","acceptedAnswer":{"@type":"Answer","text":"Legally, yes, you can sell your 'undivided share' to a third party. However, the buyer cannot take physical possession of any specific part of the house; they only step into your shoes and will have to file a partition suit to get possession. Practically, it’s hard to find buyers for undivided shares unless it's a family member."}},{"@type":"Question","name":"Is there a time limit to file for partition?","acceptedAnswer":{"@type":"Answer","text":"There is no strict limitation period for filing a partition suit for ancestral property as long as your right as a co-owner exists. However, if you have been 'ousted' (denied entry/rights) hostilely for more than 12 years, you might lose your right under 'Adverse Possession.' It is crucial to send a notice immediately when your rights are denied."}},{"@type":"Question","name":"Does a family partition deed need valid registration?","acceptedAnswer":{"@type":"Answer","text":"Yes. If you divide property by mutual agreement (Family Settlement), the Partition Deed must be registered on stamp paper to be legally valid and admissible in court. Unregistered deeds can be challenged. A court decree of partition, however, is a valid title document."}},{"@type":"Question","name":"Can we partition a property that has a bank loan?","acceptedAnswer":{"@type":"Answer","text":"Generally, no. The bank has the first charge on the property. You must clear the loan before partitioning. However, co-owners can agree to split the loan liability along with the property, but the bank must agree to this 'novation' of contract."}},{"@type":"Question","name":"Can a minor demand partition?","acceptedAnswer":{"@type":"Answer","text":"Yes, a minor coparcener can file a suit for partition through a 'next friend' or guardian if the joint family management is detrimental to the minor's interest. The court will safeguard the minor's share."}},{"@type":"Question","name":"How much does a partition legal notice cost?","acceptedAnswer":{"@type":"Answer","text":"VakilTalk charges ₹1,499 for a professional Partition Notice. This includes analyzing your family tree and share entitlement, drafting the notice citing relevant succession laws, demanding accounts of income (rent/profits), and dispatching via Registered Post. It serves as strict evidence of your claim."}}]}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"LegalService","telephone":"+91-70476 83995","image":"https://vakiltech.in/vt-logo.png","address":{"@type":"PostalAddress","addressCountry":"IN"},"priceRange":"\u20b91,499+","name":"vakiltech - Legal Notice for Property Partition","description":"Co-owner demanding partition? Send a specialized Legal Notice for Property Partition. Claim your share in ancestral/joint family property. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-property-partition","areaServed":{"@type":"Country","name":"India"},"provider":{"@type":"Organization","name":"vakiltech","url":"https://vakiltech.in","logo":"https://vakiltech.in/logo.png","contactPoint":{"@type":"ContactPoint","telephone":"+91-70476 83995","contactType":"Customer Service","availableLanguage":["English","Hindi"]}},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"offers":{"@type":"Offer","price":"1499","priceCurrency":"INR","availability":"https://schema.org/InStock"}}` }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"WebPage","name":"Legal Notice for Partition of Property | Ancestral & Joint Family","description":"Co-owner demanding partition? Send a specialized Legal Notice for Property Partition. Claim your share in ancestral/joint family property. Starts ₹1499.","url":"https://vakiltech.in/send-legal-notice/legal-notice-for-property-partition","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1","h2",".prose"]},"mainEntity":{"@type":"Service","name":"Legal Notice for Property Partition","description":"Partition is the process of dividing a joint property into separate shares. In India, every co-owner has an **absolute right** to demand partition; you cannot be forced to remain in a joint ownership against your will. Whether it is ancestral property or a jointly purchased asset, sending a **Legal Notice for Partition** is the first step to claiming your specific share and separating your legal liability from other co-owners.","provider":{"@type":"Organization","name":"vakiltech"}}}` }}
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
                    Legal Notice for Partition of Property
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Co-owner demanding partition? Send a specialized Legal Notice for Property Partition. Claim your share in ancestral/joint family property. Starts ₹1499.
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
<h2 className="text-2xl font-bold text-foreground mb-4">Two Ways to Partition Property</h2>
<p className="text-muted-foreground mb-4">Partition effectively puts an end to joint ownership: 1. **Partition by Metes and Bounds (Physical):** The property is physically divided (e.g., land is split into plots). Each owner gets a specific portion. 2. **Partition by Sale:** If physical division is not practical (e.g., a single flat), the property is sold—either to a third party or one co-owner buys out the others—and the proceeds are distributed according to shares. Your legal notice can demand either mode depending on the property type.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Ancestral vs. Self-Acquired Property</h2>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>**Ancestral Property:** Property inherited from four generations of male lineage. You have a birthright in this. A partition notice can be sent anytime. * **Self-Acquired Property:** Property purchased by an individual. They can sell or gift it to anyone. Legal heirs can only claim partition *after* the owner dies (if there is no Will).</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Daughter's Right to Property</h2>
<p className="text-muted-foreground mb-4">Since the *Hindu Succession (Amendment) Act, 2005*, daughters are coparceners. This means they have the **same rights** as sons in ancestral property, including the right to ask for partition and claim an equal share. A married daughter can also send a legal notice for partition to her father or brothers.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What is a Legal Notice for Property Partition?</h2>
<p className="text-muted-foreground mb-4">A legal notice for property partition is sent by a co-owner to demand division of jointly owned property. Under Hindu law, Muslim law, and general property law, every co-owner has an absolute right to demand partition of joint family property, ancestral property, or co-owned property. This notice formally demands your share of the property through physical division or sale and distribution of proceeds. It's the first step before filing a partition suit under Section 2 of the Partition Act 1893.</p>
<p className="text-muted-foreground mb-4">Demands division of jointly owned or ancestral property</p>
<p className="text-muted-foreground mb-4">Absolute right of co-owner under law (cannot be denied)</p>
<p className="text-muted-foreground mb-4">Covers Hindu Undivided Family (HUF) property and co-ownership</p>
<p className="text-muted-foreground mb-4">Can demand physical partition or sale and distribution</p>
<p className="text-muted-foreground mb-4">Prerequisite before filing partition suit in civil court</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">When Can You Demand Property Partition?</h2>
<p className="text-muted-foreground mb-4">You can send a legal notice for partition in these situations:</p>
<p className="text-muted-foreground mb-4">Joint family property (ancestral property under Hindu law)</p>
<p className="text-muted-foreground mb-4">Property inherited jointly by siblings or legal heirs</p>
<p className="text-muted-foreground mb-4">Co-owned property purchased jointly by multiple persons</p>
<p className="text-muted-foreground mb-4">Property held as tenants-in-common or joint tenants</p>
<p className="text-muted-foreground mb-4">Hindu Undivided Family (HUF) property where you're a coparcener</p>
<p className="text-muted-foreground mb-4">When other co-owners refuse to divide property amicably</p>
<p className="text-muted-foreground mb-4">When you want to separate your share for sale or independent use</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Legal Right to Property Partition in India</h2>
<p className="text-muted-foreground mb-4">The right to partition is an absolute legal right recognized under Indian law. For Hindus, the Hindu Succession Act 1956 and Partition Act 1893 govern partition. Every coparcener in a Hindu Undivided Family has an absolute right to demand partition of ancestral property. Since the 2005 amendment, daughters also have equal coparcenary rights by birth. For Muslims, partition is governed by Shariat law and general property law. For co-owned property (non-ancestral), any co-owner can demand partition as their right cannot be denied by other co-owners. The only question is the mode of partition—physical division or sale.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Types of Property Partition</h2>
<p className="text-muted-foreground mb-4">There are two main methods of partitioning property:</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Physical Partition</h2>
<p className="text-muted-foreground mb-4">The property is physically divided into separate portions based on each co-owner's share. For example, a house divided into separate floors, or land divided into separate plots with clear boundaries. This method is preferred when the property is large enough to be meaningfully divided without destroying its value or utility. Courts will order physical partition with the help of commissioners who measure and demarcate shares.</p>
<p className="text-muted-foreground mb-4">Property divided into separate physical portions</p>
<p className="text-muted-foreground mb-4">Each co-owner gets exclusive possession of their share</p>
<p className="text-muted-foreground mb-4">Suitable for large properties (land, multi-floor buildings)</p>
<p className="text-muted-foreground mb-4">Court appoints commissioner for measurement and division</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Partition by Sale</h2>
<p className="text-muted-foreground mb-4">When physical partition is not feasible (small property, indivisible asset, or co-owners unable to agree on division), the court orders sale of the entire property and distribution of sale proceeds according to each co-owner's share. This is common for single residential houses or properties where division would destroy value.</p>
<p className="text-muted-foreground mb-4">Entire property sold through court auction</p>
<p className="text-muted-foreground mb-4">Sale proceeds divided among co-owners as per their shares</p>
<p className="text-muted-foreground mb-4">Used when physical partition not feasible</p>
<p className="text-muted-foreground mb-4">Court supervises sale to ensure fair market value</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">What Should a Partition Notice Contain?</h2>
<p className="text-muted-foreground mb-4">Your legal notice should comprehensively establish your claim:</p>
<p className="text-muted-foreground mb-4">Details of the property: location, area, registration details</p>
<p className="text-muted-foreground mb-4">Nature of co-ownership (ancestral, inherited, jointly purchased)</p>
<p className="text-muted-foreground mb-4">Details of all co-owners and their respective shares</p>
<p className="text-muted-foreground mb-4">Your legal right to demand partition (coparcener, legal heir, co-owner)</p>
<p className="text-muted-foreground mb-4">Attempts made to resolve partition amicably</p>
<p className="text-muted-foreground mb-4">Demand for physical partition with specific proposal for division</p>
<p className="text-muted-foreground mb-4">Alternative demand for partition by sale if physical division not feasible</p>
<p className="text-muted-foreground mb-4">Demand for accounts (if property generates income like rent)</p>
<p className="text-muted-foreground mb-4">Warning of partition suit if demand not accepted</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Process After Sending Partition Notice</h2>
<p className="text-muted-foreground mb-4">After the notice, co-owners may agree to partition amicably through mutual settlement deed and division. If they refuse or cannot agree, you need to file a partition suit in Civil Court. The court will examine ownership documents, determine each co-owner's share, appoint commissioners to inspect and value the property, decide between physical partition or sale based on feasibility, and pass a preliminary decree (determining shares) followed by final decree (actual partition). Partition suits typically take 2-5 years depending on property complexity and disputes over shares.</p>
<p className="text-muted-foreground mb-4">Stop waiting for others to give you your share. Demand it legally.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Rajiv secured his 1/3rd share worth₹2.5 Crores</h2>
<p className="text-muted-foreground mb-4">Rajiv's brothers were enjoying the rent from their ancestral commercial building while excluding him. They refused to divide the property for 5 years. VakilTalk drafted a sharp legal notice demanding partition and 'mesne profits' (share of past rent). Faced with a partition suit that would freeze the asset, the brothers agreed to a settlement. The property was sold, and Rajiv received his full legal share of ₹2.5 Crores.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Absolute Right Enforced</li>
</ul>
<p className="text-muted-foreground mb-4">Notice made it clear that courts cannot deny partition, forcing a settlement.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Profits Recovered</li>
</ul>
<p className="text-muted-foreground mb-4">Successfully claimed share of the rent collected by brothers for past 3 years.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Fair Market Exit</li>
</ul>
<p className="text-muted-foreground mb-4">Rajiv exited a stuck investment at current market valuation.</p>
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
<li>Mediation</li>
</ul>
<p className="text-muted-foreground mb-4">Most property disputes are best settled out of court to save decades of time. Draft a Family Settlement Deed or Vacation Agreement.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>File Case</li>
</ul>
<p className="text-muted-foreground mb-4">Suit for Partition: To legally divide the family property by metes and bounds or by sale.</p>
<p className="text-muted-foreground mb-4">Suit for Declaration &amp; Possession: If your title or possession is being denied.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Need Expert Guidance?</li>
</ul>
<p className="text-muted-foreground mb-4">Not sure if this is the right notice for your situation? Talk to a lawyer for personalized advice before proceeding.</p>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">PartitionRights</h2>
<p className="text-muted-foreground mb-4">Your right to partition is protected under the Partition Act, 1893 and succession laws.</p>
<p className="text-muted-foreground mb-4">EXPERT INSIGHT</p>
<p className="text-muted-foreground mb-4">In a partition suit, the court fees are often minimal (fixed fee) if you are in 'constructive possession' (i.e., you are a legal co-owner), making it an affordable remedy.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>📜Hindu Succession Act, 1956</li>
<li>⚖️The Partition Act, 1893</li>
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
<h2 className="text-2xl font-bold text-foreground mb-4">See a Real Legal Notice for Property Partition Format</h2>
<p className="text-muted-foreground mb-4">Preview a professionally drafted legal notice for property partition.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Sample Legal Notice — Legal Notice for Property Partition</li>
<li>Legally valid format used by 10,000+ lawyers.</li>
</ul>
</div>
<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
<h2 className="text-2xl font-bold text-foreground mb-4">Get Your Legal Notice for Property Partition Drafted</h2>
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
<h2 className="text-2xl font-bold text-foreground mb-4">Other Tenant &amp; Property Legal Notices</h2>
<p className="text-muted-foreground mb-4">Need a different type of legal notice? We have specialized options.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Tenant Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Send legal notice to tenant for various disputes.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Rent Arrears</li>
</ul>
<p className="text-muted-foreground mb-4">Recover unpaid rent from tenant.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Eviction Notice</li>
</ul>
<p className="text-muted-foreground mb-4">Lawfully evict tenant from property.</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Property Partition</li>
</ul>
<p className="text-muted-foreground mb-4">Legal division of jointly owned property.</p>
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
<p className="text-muted-foreground mb-4">Everything you need to know about legal notice for property partition</p>
<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">
<li>Can I sell my undivided share without partition?</li>
<li>Is there a time limit to file for partition?</li>
<li>Does a family partition deed need valid registration?</li>
<li>Can we partition a property that has a bank loan?</li>
<li>Can a minor demand partition?</li>
<li>How much does a partition legal notice cost?</li>
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
