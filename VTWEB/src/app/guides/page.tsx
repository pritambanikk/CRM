import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { GUIDES, GUIDE_CATEGORIES, getGuidesByCategory, guidePath } from "@/data/guides";

export const metadata: Metadata = {
  title: "Legal Guides — Step-by-Step Guides for Every Legal Situation | vakiltech",
  description:
    "Free step-by-step legal guides for India — divorce procedure, consumer complaints, cheque bounce, eviction notices, and more. Written by licensed advocates.",
  keywords: [
    "legal guides india",
    "legal how-to guides",
    "vakiltech guides",
    "divorce guide india",
    "consumer complaint guide india",
    "cheque bounce guide india",
  ],
  alternates: {
    canonical: "https://vakiltech.in/guides",
  },
};

export default function GuidesIndexPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Guides", current: true },
  ];

  const byCategory = getGuidesByCategory();
  const totalGuides = GUIDES.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Legal Guides — vakiltech",
            description:
              "Step-by-step legal guides for every legal situation in India — divorce, consumer complaints, cheque bounce, eviction, and more.",
            url: "https://vakiltech.in/guides",
            publisher: { "@type": "Organization", name: "vakiltech" },
            hasPart: GUIDES.map((g) => ({
              "@type": "Article",
              name: g.title,
              url: `https://vakiltech.in${guidePath(g)}`,
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="bg-card border-b">
          <div className="max-w-5xl mx-auto px-4 py-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-b from-primary/5 to-transparent border-b border-border">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Legal Guides
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-6">
              Step-by-step guides for every legal situation in India — written by licensed advocates, updated for 2026.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="bg-card border border-border rounded-full px-3 py-1">
                {totalGuides} guides
              </span>
              <span className="bg-card border border-border rounded-full px-3 py-1">
                {GUIDE_CATEGORIES.filter((c) => (byCategory[c] ?? []).length > 0).length} categories
              </span>
              <span className="bg-card border border-border rounded-full px-3 py-1">
                Free to read
              </span>
            </div>
          </div>
        </div>

        {/* Guide listing by category */}
        <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
          {GUIDE_CATEGORIES.map((category) => {
            const guides = byCategory[category] ?? [];
            if (guides.length === 0) return null;
            return (
              <section key={category}>
                <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
                  {category}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={guidePath(guide)}
                      className="group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                            {guide.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {guide.description}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
                      </div>
                      <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{guide.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-border bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground mb-1">Need help with your specific situation?</p>
              <p className="text-sm text-muted-foreground">Talk to a verified advocate in 30 seconds — ₹299</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Talk to a Lawyer <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/send-legal-notice"
                className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary/5 transition-colors"
              >
                Send Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
