import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our legal services or return to the homepage.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-extrabold mb-2 text-primary">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-foreground">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
          >
            Go Home
          </Link>
          <Link
            href="/consultation"
            className="px-6 py-3 border-2 border-primary/20 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-secondary transition-all text-center"
          >
            Book Consultation
          </Link>
          <Link
            href="/send-legal-notice"
            className="px-6 py-3 border-2 border-primary/20 text-foreground rounded-lg font-semibold hover:border-primary hover:bg-secondary transition-all text-center"
          >
            Send Legal Notice
          </Link>
        </div>
      </div>
    </div>
  );
}