"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { CheckCircle, Download, MessageCircle, ArrowRight } from "lucide-react";
import { BUNDLE_DOWNLOAD_URLS } from "@/config/bundle-downloads";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const bundle = searchParams.get("bundle") || "your bundle";
  const orderId = searchParams.get("orderId") || null;

  const [downloadTriggered, setDownloadTriggered] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bundleLabel: Record<string, string> = {
    "hindi-english": "Hindi + English Bundle",
    "marathi-only": "Marathi Bundle",
    "hindi-english-marathi": "Hindi + English + Marathi Bundle",
  };

  const displayBundle = bundleLabel[bundle] || bundle;

  const triggerDownload = () => {
    const url = BUNDLE_DOWNLOAD_URLS[bundle];
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      // Extract filename from URL or use a default
      const fileName = url.split('/').pop() || `${bundle}-legal-drafts.zip`;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadTriggered(true);
    } else {
      setError("Download link not found for this bundle.");
    }
  };

  // Auto-download attempt after short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerDownload();
    }, 2000);
    return () => clearTimeout(timer);
  }, [bundle]);

  return (
    <main className="min-h-screen bg-background">
      {/* ── Success banner ── */}
      <div className="bg-green-50 border-b border-green-200 py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-green-700 text-sm font-medium">
          <CheckCircle className="w-4 h-4 shrink-0" />
          Payment confirmed — {displayBundle}
          {orderId && (
            <span className="text-green-600 font-normal text-xs ml-1">· Order #{orderId}</span>
          )}
        </div>
      </div>

      <div className="container mx-auto px-5 py-12 max-w-3xl">

        {/* ── Download status card ── */}
        <div className="bg-white border border-border rounded-2xl p-6 mb-10 shadow-sm text-center">
          {!downloadTriggered ? (
            <>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 animate-pulse">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl font-bold text-foreground mb-1">Preparing your download…</h1>
              <p className="text-sm text-muted-foreground">Your 3500+ legal draft templates are starting to download.</p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h1 className="text-xl font-bold text-foreground mb-1">Download Started!</h1>
              <p className="text-sm text-muted-foreground mb-6">
                Your file is downloading. If it didn&apos;t start, click the button below.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                <button
                  onClick={triggerDownload}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Again
                </button>
                
                <a
                  href="https://wa.link/7yy2ct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Help on WhatsApp
                </a>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
                <strong>Important:</strong> We have also sent a backup download link to your WhatsApp.
              </div>
            </>
          )}
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-xl text-sm border border-red-100">
              {error}
            </div>
          )}
        </div>

        {/* ── Before / After comparison ── */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
            The difference one download makes
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {/* Before */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm relative">
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  Before
                </span>
              </div>
              <div className="relative w-full aspect-square">
                <Image
                  src="/Stressed_lawyer.png"
                  alt="Stressed lawyer struggling with legal drafts"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 py-2.5 bg-red-50 border-t border-red-100">
                <p className="text-xs text-red-700 font-medium text-center leading-snug">
                  Spending hours drafting from scratch
                </p>
              </div>
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden border border-green-200 shadow-sm relative">
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="bg-green-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  After
                </span>
              </div>
              <div className="relative w-full aspect-square">
                <Image
                  src="/relaxed_lawyer.png"
                  alt="Relaxed lawyer with ready-to-use legal templates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-3 py-2.5 bg-green-50 border-t border-green-100">
                <p className="text-xs text-green-700 font-medium text-center leading-snug">
                  Ready-to-edit draft in under 60 seconds
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Need help strip ── */}
        <div className="bg-muted/40 border border-border rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-muted-foreground text-center sm:text-left">
            Any questions or need help with your templates?
          </p>
          <a
            href="https://wa.link/7yy2ct"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold px-5 py-2 rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp us
          </a>
        </div>

      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
