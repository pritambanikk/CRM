import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/shared/client-layout";
import Script from "next/script";
import { GTM_CONTAINER_ID, CLARITY_PROJECT_ID } from "@/lib/analytics-config";
import { defaultMetadata, BASE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "vakiltech",
  alternateName: "vakiltech.in",
  url: BASE_URL,
  logo: `${BASE_URL}/vt-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7047683995",
    email: "help@vakiltech.in",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://facebook.com/vakiltech",
    "https://www.instagram.com/vakil.tech/",
    "https://www.linkedin.com/company/vakil-tech/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "vakiltech",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/blogs?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {GTM_CONTAINER_ID && (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
              `}
            </Script>
          </>
        )}
        {CLARITY_PROJECT_ID && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}
        {GTM_CONTAINER_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        )}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
