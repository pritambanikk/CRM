import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { FAQSection } from "@/components/shared/faq-section";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Serve an Eviction Notice in India — Landlord's Legal Guide | vakiltech",
  description:
    "Evicting a tenant in India? Learn the legal procedure, valid grounds, mandatory notice periods, and how to send a legally valid eviction notice — ₹1,499.",
  keywords: [
    "eviction notice procedure",
    "how to evict tenant india",
    "eviction notice india",
    "landlord tenant notice india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides/how-to-serve-eviction-notice-india",
  },
};

export default function EvictionNoticeGuidePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "How to Serve Eviction Notice India", current: true },
  ];

  const faqs = [
    {
      question: "Can I evict a tenant without going to court?",
      answer:
        "In most cases involving a valid tenancy agreement, you cannot forcibly evict a tenant without a court order. A legally served eviction notice is the mandatory first step. If the tenant voluntarily vacates after receiving the notice, no court proceeding is needed. However, if the tenant refuses to leave, you must file an eviction suit before the Rent Controller or Civil Court. Self-help eviction — changing locks, cutting utilities, or removing belongings — is illegal regardless of how long the tenant has defaulted.",
    },
    {
      question: "What if a tenant has lived there for 10 or more years?",
      answer:
        "Long tenure does not extinguish a landlord's right to evict, but it does complicate the process in states with strong rent control legislation (such as Maharashtra, Delhi, Tamil Nadu, and West Bengal). In some states, a tenant of 10+ years acquires stronger statutory protections, and you may need to demonstrate urgent personal need or non-payment. The grounds and procedure remain the same, but courts tend to be more careful in such cases. Seek legal advice before issuing the notice.",
    },
    {
      question: "Can I cut electricity or water to force a tenant out?",
      answer:
        "No. Cutting off essential utilities such as electricity, water, or gas to force a tenant to vacate is illegal and constitutes harassment. Courts have consistently held that this amounts to constructive eviction and violates the tenant's fundamental rights. The landlord can face criminal charges for harassment and civil liability for damages. The only lawful route is to serve a valid eviction notice and, if necessary, file an eviction suit.",
    },
    {
      question: "What is the difference between an eviction notice and an eviction suit?",
      answer:
        "An eviction notice is a formal pre-litigation document served on the tenant, notifying them of the grounds for eviction and demanding they vacate within a specified period (typically 30 days for residential properties). It is a mandatory first step. An eviction suit is a formal court proceeding filed before the Rent Controller or Civil Court if the tenant fails to comply with the notice. The suit results in a judicial order (decree) directing the tenant to vacate, which can then be executed by the court's bailiff if the tenant still refuses.",
    },
    {
      question: "Can I evict a family member who is living in my property?",
      answer:
        "Yes, though it can be emotionally and legally complex. If the family member is not a co-owner and does not have a registered tenancy agreement, the legal position is stronger. In cases involving parents, siblings, or children, courts apply general civil law principles rather than rent control legislation. A legal notice served by an advocate is essential — it establishes the formal legal relationship and the demand to vacate. If the matter proceeds to court, it is typically filed as a civil suit for possession.",
    },
    {
      question: "What if the tenant is paying rent but I want the property back for personal use?",
      answer:
        "Personal use (also called bona fide personal need) is a recognised ground for eviction under most state rent control acts, even when the tenant is paying rent regularly. You must demonstrate that you genuinely require the property for your own use or that of an immediate family member, and that you do not have suitable alternative accommodation. The notice must clearly state this ground and the urgency of your need. Courts scrutinise personal use claims carefully — ensure you are prepared with evidence of your requirement.",
    },
    {
      question: "How long does an eviction suit take in India?",
      answer:
        "The timeline varies significantly by state, court, and complexity. A straightforward eviction suit before a Rent Controller (for clear non-payment or lease expiry cases) may be resolved in 6–18 months. Contested suits — especially those involving personal use or disputed subletting — can take 2–5 years, and may go to a higher court if appealed. This is why serving a strong legal notice and attempting a negotiated exit is strongly recommended before resorting to litigation.",
    },
    {
      question: "Can I change the lock to prevent a tenant from re-entering?",
      answer:
        "You may not change the locks while the tenant is still in lawful possession of the premises — even after the eviction notice period has expired. Changing locks without a court order constitutes illegal dispossession and can expose you to criminal charges and civil damages. Once a court issues an eviction decree and the decree is executed by the court's bailiff, you can then take possession of the premises legally. If the tenant has abandoned the property and left their belongings, consult your advocate before changing the locks.",
    },
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Serve an Eviction Notice in India — A Landlord's Legal Guide",
    author: { "@type": "Organization", name: "vakiltech Legal Team" },
    datePublished: "2026-04-24T00:00:00+05:30",
    dateModified: "2026-04-24T00:00:00+05:30",
    publisher: {
      "@type": "Organization",
      name: "vakiltech",
      logo: { "@type": "ImageObject", url: "https://vakiltech.in/logo.png" },
    },
    description:
      "Evicting a tenant in India? Learn the legal procedure, valid grounds, mandatory notice periods, and how to send a legally valid eviction notice — ₹1,499.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vakiltech.in/guides/how-to-serve-eviction-notice-india",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              How to Serve an Eviction Notice in India — A Landlord&apos;s Legal Guide
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Evicting a tenant in India is a legally prescribed process. You cannot simply ask a tenant to leave — the law requires a valid notice, specific grounds, and a mandatory notice period before any court action can follow. This guide covers every step a landlord must take, the legal provisions that govern eviction across India, and when a professionally drafted legal notice makes all the difference.
            </p>
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  V
                </div>
                <div>
                  <p className="font-medium text-foreground">vakiltech Legal Team</p>
                  <p className="text-xs text-muted-foreground">Legal Reviewer</p>
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

          <div className="prose prose-lg max-w-none mb-16 text-foreground/90">

            {/* Section 1 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Grounds for Eviction in India</h2>
              <p className="text-muted-foreground mb-4">
                Indian law does not allow landlords to evict tenants arbitrarily. Both the Transfer of Property Act, 1882 and various state-specific Rent Control Acts enumerate the valid grounds on which a landlord may seek eviction. These grounds must be clearly stated in the notice — a notice that cites an unrecognised ground is legally defective.
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Non-Payment of Rent</h3>
                  <p>
                    The most common ground for eviction. If a tenant fails to pay rent within the time stipulated in the lease agreement — or within 15 days of the due date in the absence of a specific agreement — the landlord may serve an eviction notice. The notice must specify the amount of rent outstanding, the period to which it relates, and a deadline to pay or vacate. Many states require the landlord to give the tenant an opportunity to pay before filing an eviction suit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Expiry of Lease Agreement</h3>
                  <p>
                    When a fixed-term lease expires and the tenant holds over without the landlord&apos;s consent, the landlord is entitled to demand possession. Even where a tenant continues to pay rent after lease expiry (creating a tenancy at will or a periodic tenancy), the landlord may terminate the tenancy by giving the appropriate notice period under the applicable state law or the agreement. A legally valid notice citing lease expiry is the correct first step.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Personal Use — Bona Fide Requirement</h3>
                  <p>
                    A landlord who genuinely requires the property for their own residence or that of an immediate family member can seek eviction on the ground of bona fide personal requirement. This ground applies even when the tenant is paying rent regularly. The landlord must demonstrate the genuineness of the need — courts do not allow this ground to be used as a pretext. States such as Delhi, Maharashtra, and Tamil Nadu have specific provisions governing what constitutes a bona fide requirement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Subletting Without Permission</h3>
                  <p>
                    Most standard lease agreements and state rent control laws prohibit a tenant from subletting the premises to a third party without the landlord&apos;s written consent. Unauthorised subletting is a valid ground for eviction. The landlord must establish that subletting occurred and that it was done without permission. Evidence such as photographs, electricity bills in the sub-tenant&apos;s name, or witness testimony is relevant.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Property Damage</h3>
                  <p>
                    If a tenant wilfully damages the structure of the premises, makes unauthorised alterations, or uses the property in a manner that impairs its value or utility, the landlord can seek eviction on the ground of misuse or damage. This ground requires evidence — photographic documentation of the damage and, where possible, an inspection report from a qualified civil engineer or surveyor.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Illegal Occupation</h3>
                  <p>
                    Where a person occupies property without any lease agreement, permission, or legal basis — commonly referred to as illegal occupation or encroachment — the landowner is entitled to demand vacation immediately. There is no notice period mandated by law in such cases, though serving a formal legal notice before approaching court establishes a clean legal record and demonstrates that the owner pursued peaceful resolution first.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Mandatory Notice Period Under Rent Control Acts</h2>
              <p className="text-muted-foreground mb-4">
                India does not have a uniform national eviction law. Each state has its own Rent Control Act that governs the landlord-tenant relationship and prescribes the notice period a landlord must give before filing an eviction suit. The Transfer of Property Act, 1882 applies in the absence of a specific state law or for properties not covered by rent control.
              </p>
              <p className="text-muted-foreground mb-4">
                As a general rule, the minimum notice period is <strong className="text-foreground">one calendar month for residential properties</strong> and <strong className="text-foreground">three calendar months for commercial properties</strong>. However, the applicable period depends on the state law and the specific ground for eviction.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-muted-foreground border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">State</th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">Governing Act</th>
                      <th className="text-left py-2 text-foreground font-semibold">Typical Notice Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Delhi</td>
                      <td className="py-2 pr-4">Delhi Rent Control Act, 1958</td>
                      <td className="py-2">1 month (residential); 3 months (commercial)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Maharashtra</td>
                      <td className="py-2 pr-4">Maharashtra Rent Control Act, 1999</td>
                      <td className="py-2">1 month (residential); 3 months (commercial)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Karnataka</td>
                      <td className="py-2 pr-4">Karnataka Rent Act, 2001</td>
                      <td className="py-2">1 month (residential); 3 months (commercial)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Tamil Nadu</td>
                      <td className="py-2 pr-4">Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017</td>
                      <td className="py-2">1 month (residential); 3 months (commercial)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">West Bengal</td>
                      <td className="py-2 pr-4">West Bengal Premises Tenancy Act, 1997</td>
                      <td className="py-2">1 month (residential)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Uttar Pradesh</td>
                      <td className="py-2 pr-4">UP Urban Buildings (Regulation of Letting, Rent and Eviction) Act, 1972</td>
                      <td className="py-2">30 days (residential &amp; commercial)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium text-foreground">Telangana / Andhra Pradesh</td>
                      <td className="py-2 pr-4">Andhra Pradesh Buildings (Lease, Rent and Eviction) Control Act, 1960</td>
                      <td className="py-2">30 days (residential); 90 days (commercial)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm italic">
                Note: Notice periods may vary depending on the ground cited and the specific provisions of the applicable state act. Always verify the applicable law before serving notice.
              </p>
            </div>

            {/* Mid CTA */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-8 text-center mb-8">
              <p className="text-xl font-bold text-foreground mb-2">Ready to send your eviction notice?</p>
              <p className="text-muted-foreground mb-6">Drafted by licensed advocates, citing the correct grounds and notice period for your state. Delivered via registered post.</p>
              <Link
                href="/send-legal-notice/eviction-legal-notice"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Send Eviction Legal Notice — ₹1,499
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Section 3 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Draft a Valid Eviction Notice</h2>
              <p className="text-muted-foreground mb-4">
                An eviction notice that is incomplete, incorrectly addressed, or legally defective can be challenged by the tenant and may require the landlord to restart the entire process. Indian courts have dismissed eviction suits where the pre-suit notice was defective. Every valid eviction notice must contain the following elements:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Full name and address of the tenant</strong> — exactly as stated in the lease agreement, including the name of any co-tenants.
                </li>
                <li>
                  <strong className="text-foreground">Complete address of the property</strong> — including floor, unit number, street, city, and PIN code. This must match the address in the lease agreement.
                </li>
                <li>
                  <strong className="text-foreground">Ground for eviction</strong> — stated clearly and specifically. If the ground is non-payment, state the months and amounts outstanding. If the ground is expiry of lease, state the expiry date and the lease reference.
                </li>
                <li>
                  <strong className="text-foreground">Notice period</strong> — the specific period within which the tenant is required to vacate, calculated from the date of receipt of the notice. Must comply with the applicable state law.
                </li>
                <li>
                  <strong className="text-foreground">Demand to vacate</strong> — a clear, unambiguous statement that the tenant is required to hand over vacant possession of the premises.
                </li>
                <li>
                  <strong className="text-foreground">Legal action warning</strong> — a statement that if the tenant fails to vacate within the notice period, the landlord will institute eviction proceedings before the competent Rent Controller or Civil Court, at the tenant&apos;s risk as to costs.
                </li>
                <li>
                  <strong className="text-foreground">Advocate&apos;s signature and Bar Council number</strong> — the notice carries significantly more legal weight when drafted and signed by a licensed advocate on official letterhead.
                </li>
              </ul>
              <p className="text-muted-foreground">
                For a professionally drafted eviction notice that complies with the applicable state law and contains all required elements, see{" "}
                <Link href="/send-legal-notice/eviction-legal-notice" className="text-primary hover:underline">
                  vakiltech&apos;s eviction legal notice service
                </Link>
                .
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Serving the Notice — How to Do It Legally</h2>
              <p className="text-muted-foreground mb-4">
                A notice that is not served correctly is as problematic as one that is not drafted correctly. Indian courts require proof that the notice was actually received by the tenant — or that the tenant had a reasonable opportunity to receive it. Here is how to serve an eviction notice correctly:
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Registered Post / Speed Post with Acknowledgement Due (AD)</h3>
                  <p>
                    This is the most reliable method and the one Indian courts accept most readily. Send the notice via India Post Speed Post with Acknowledgement Due to the tenant&apos;s address — which is typically the property itself. Retain the postal receipt and the returned AD card. Together, they constitute conclusive proof of delivery and the date of delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Personal Delivery with Acknowledgement</h3>
                  <p>
                    You (or your advocate) can personally deliver the notice to the tenant and obtain a signed acknowledgement receipt. If the tenant refuses to sign, have two independent witnesses attest to the fact of delivery and the tenant&apos;s refusal to acknowledge. Their signatures on a separate document serve as proof.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">If the Tenant Refuses to Accept</h3>
                  <p>
                    If the postman attempts delivery but the tenant refuses to accept the registered letter, the India Post return record showing &ldquo;refused by addressee&rdquo; is treated by courts as effective service — the tenant cannot benefit from their own refusal to accept. Ensure you have the postal tracking record showing the attempted delivery and refusal. Courts have consistently held that constructive notice applies in such cases.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Keep All Proof</h3>
                  <p>
                    Retain copies of: (1) the signed notice, (2) the postal receipt from the post office, (3) the returned AD card or tracking record, and (4) any acknowledgement from the tenant. These documents are essential if the matter proceeds to court — the landlord must prove that the pre-suit notice was properly served before the eviction suit is admitted.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">If the Tenant Refuses to Vacate</h2>
              <p className="text-muted-foreground mb-4">
                If the notice period expires and the tenant has not vacated, the next step is a formal legal proceeding. Here is the typical path:
              </p>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Filing an Eviction Suit Before the Rent Controller</h3>
                  <p>
                    In states with Rent Control Acts, eviction suits are filed before the Rent Controller (a designated government officer or special court). The landlord files a petition citing the ground for eviction, attaches the eviction notice and its proof of service, and requests an order directing the tenant to vacate. The Rent Controller issues summons to the tenant, who can file a written statement. The case proceeds through evidence and arguments before a final order is passed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Civil Court — Suit for Possession</h3>
                  <p>
                    For properties not covered by the applicable Rent Control Act (such as properties above a certain rental value, commercial properties in some states, or properties where rent control does not apply), the landlord files a civil suit for possession before the Civil Court. The procedure is governed by the Code of Civil Procedure, 1908. The suit is more formal and typically takes longer than a Rent Controller proceeding.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Application for Interim Injunction</h3>
                  <p>
                    Where there is risk that the tenant may damage the property, further sublet it, or abscond, the landlord can file an application for an interim injunction alongside the eviction suit, restraining the tenant from creating third-party interests in the property during the pendency of the suit.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Execution of the Eviction Decree</h3>
                  <p>
                    Once the court passes an eviction decree and all appeals are exhausted (or the time for appeal has passed), the landlord files an execution petition. The court&apos;s bailiff or process server physically takes possession of the premises and hands it over to the landlord. Only at this stage does the landlord lawfully re-enter and change the locks.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 — Property Action Grid */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Notice for Your Property Situation</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Select the notice that best matches your property dispute — each is drafted and sent by verified advocates, tailored to your specific situation.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { name: "Eviction Notice", href: "/send-legal-notice/eviction-legal-notice" },
                  { name: "Notice to Tenant", href: "/send-legal-notice/legal-notice-to-tenant" },
                  { name: "Notice to Builder", href: "/send-legal-notice/legal-notice-to-builder" },
                  { name: "Rent Arrears Notice", href: "/send-legal-notice/legal-notice-for-rent-arrears" },
                  { name: "Property Possession", href: "/send-legal-notice/legal-notice-for-property-possession" },
                  { name: "Property Partition", href: "/send-legal-notice/property-partition-legal-notice" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors text-center"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Final CTA */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-2xl p-10 mb-16 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Send Eviction Legal Notice — ₹1,499
              </h3>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Drafted by licensed advocates, citing the correct legal grounds and notice period for your state. Sent via registered post with full tracking. Most tenants vacate after receiving a properly drafted notice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/send-legal-notice/eviction-legal-notice"
                  className="group px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105 shadow-lg text-center inline-flex items-center justify-center gap-2"
                >
                  Send Eviction Legal Notice
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/legal-consultation"
                  className="group px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center gap-2"
                >
                  Book Legal Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </article>

        <FAQSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about eviction notices and the eviction process in India"
        />
      </div>
    </>
  );
}
