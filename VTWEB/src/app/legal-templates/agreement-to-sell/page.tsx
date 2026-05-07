import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import {
  AGREEMENT_TO_SELL_TEMPLATES,
} from "@/data/legal-templates/agreement-to-sell-data";
import { BASE_URL } from "@/lib/seo";
import {
  FileText,
  Search,
  ChevronRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Agreement to Sell Templates Library | 43 Legal Formats ₹49",
  description:
    "Browse 43 lawyer-drafted Agreement to Sell templates for every property type & ownership structure. Cooperative flats, commercial properties, agricultural land, joint owners, inherited properties & more.",
  keywords: [
    "agreement to sell templates",
    "agreement to sell formats",
    "property sale agreement",
    "legal templates library",
    "cooperative housing",
    "residential property",
    "commercial property",
  ],
  alternates: {
    canonical: `${BASE_URL}/legal-templates/agreement-to-sell`,
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/legal-templates/agreement-to-sell`,
    title: "Agreement to Sell Templates Library",
    description: "43 lawyer-drafted Agreement to Sell templates for every scenario",
    siteName: "vakiltech",
  },
};

// Categorize templates
function categorizeTemplates() {
  const categories: Record<string, typeof AGREEMENT_TO_SELL_TEMPLATES> = {
    "Cooperative Housing": [],
    "Residential Flats": [],
    "Residential Plots": [],
    "Commercial Properties": [],
    "Agricultural Land": [],
    "Multiple Owners": [],
    "Special Cases": [],
  };

  AGREEMENT_TO_SELL_TEMPLATES.forEach((template) => {
    const slug = template.slug.toLowerCase();

    if (slug.includes("cooperative")) {
      categories["Cooperative Housing"].push(template);
    } else if (slug.includes("flat") || slug.includes("apartment")) {
      categories["Residential Flats"].push(template);
    } else if (slug.includes("plot")) {
      categories["Residential Plots"].push(template);
    } else if (slug.includes("commercial") || slug.includes("shop") || slug.includes("office") || slug.includes("basement") || slug.includes("cyber")) {
      categories["Commercial Properties"].push(template);
    } else if (slug.includes("agricultural") || slug.includes("farm") || slug.includes("kothi")) {
      categories["Agricultural Land"].push(template);
    } else if (slug.includes("joint") || slug.includes("multiple") || slug.includes("husband") || slug.includes("wife")) {
      categories["Multiple Owners"].push(template);
    } else {
      categories["Special Cases"].push(template);
    }
  });

  return categories;
}

export default function AgreementToSellLibraryPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Templates", href: "/legal-templates" },
    { label: "Agreement to Sell", current: true },
  ];

  const categories = categorizeTemplates();
  const totalTemplates = AGREEMENT_TO_SELL_TEMPLATES.length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      <div className="container mx-auto px-6 md:px-8 pb-8">
        {/* Hero Section */}
        <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="z-10 mt-2 mb-6">
              <Breadcrumb items={breadcrumbItems} />
            </div>

            <div className="space-y-6 max-w-3xl">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <FileText className="h-4 w-4 mr-2" />
                {totalTemplates} Lawyer-Drafted Templates
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Agreement to Sell Templates Library
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Browse {totalTemplates} specialized Agreement to Sell formats for every property type, ownership structure, and scenario. Each template is ₹49 and covers unique legal protections.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground pt-2">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  All property types covered
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  Specialized for your scenario
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  Instant download
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  WhatsApp delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Library */}
        <div className="max-w-6xl mx-auto py-12 space-y-12">
          {Object.entries(categories).map(([categoryName, templates]) => {
            if (templates.length === 0) return null;

            return (
              <section key={categoryName}>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {categoryName}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/40 rounded-full" />
                  <p className="text-sm text-muted-foreground mt-2">
                    {templates.length} template{templates.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {templates.map((template) => (
                    <Link
                      key={template.slug}
                      href={`/legal-templates/agreement-to-sell/${template.slug}`}
                      className="group relative bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
                    >
                      {/* Gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative z-10 space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm md:text-base">
                              {template.shortLabel}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {template.scenario}
                            </p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border/50">
                          <span className="text-xs font-semibold text-primary">
                            ₹49
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {template.clausesIncluded.length} clauses
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Summary Stats */}
        <section className="max-w-6xl mx-auto py-12">
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {totalTemplates}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Templates
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                ₹49
              </div>
              <div className="text-sm text-muted-foreground">
                Per Template
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {Object.keys(categories).filter(k => categories[k].length > 0).length}
              </div>
              <div className="text-sm text-muted-foreground">
                Categories
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                5 min
              </div>
              <div className="text-sm text-muted-foreground">
                Instant Download
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto py-12">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Can't find your exact scenario?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a custom Agreement to Sell drafted by our expert lawyers specifically for your situation. Starting from ₹2,990.
            </p>
            <a
              href="/agreement-drafting"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get Custom Document
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>

      <TrustSignalsSection />
    </main>
  );
}
