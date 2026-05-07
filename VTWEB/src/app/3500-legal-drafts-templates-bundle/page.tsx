import type { Metadata } from "next";
import { LegalDraftsBundleLanding } from "@/components/features/landing-pages/legal-drafts-bundle-landing";

export const metadata: Metadata = {
  title:
    "3500+ Legal Drafts Templates Bundle | Agreement Formats & Legal Templates",
  description:
    "Download 3500+ editable legal drafts, agreement formats, legal notice templates, petitions, affidavits and deeds in Hindi, English and Marathi.",
  keywords: [
    "legal drafts",
    "legal drafts bundle",
    "legal templates",
    "legal templates India",
    "legal draft format",
    "legal documents",
    "legal documents download",
    "agreement format",
    "rent agreement format",
    "legal notice format",
    "agreements",
    "contracts",
    "notices",
    "affidavits",
    "petitions",
    "Hindi legal drafts",
    "Marathi legal documents",
    "legal bundle",
    "instant download",
  ],
  openGraph: {
    title:
      "3500+ Legal Drafts Templates Bundle | Agreement Formats & Legal Templates",
    description:
      "Editable legal drafts, agreement formats, notices, petitions, affidavits and deeds in Hindi, English and Marathi.",
    url: "/3500-legal-drafts-templates-bundle",
    type: "website",
    siteName: "vakiltech",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "3500+ Legal Drafts Templates Bundle | vakiltech",
    description:
      "Download editable agreement formats, legal notice templates and legal drafts in Hindi, English and Marathi.",
  },
  alternates: {
    canonical: "https://vakiltech.in/3500-legal-drafts-templates-bundle",
  },
};

export default function LegalDraftsBundlePage() {
  return <LegalDraftsBundleLanding />;
}
