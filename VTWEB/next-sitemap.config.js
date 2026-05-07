/** @type {import('next-sitemap').IConfig} */
// NOTE: next-sitemap is now only used to generate robots.txt.
// The sitemap itself is handled dynamically by src/app/sitemap.ts (Next.js App Router).
// This means the sitemap is always up-to-date — no manual updates needed.
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://vakiltech.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "public",
  exclude: [
    "/api/*",
    "/admin/*",
    "/_next/*",
    "/404",
    "/500",
    // Exclude everything — sitemap.ts handles URL generation
    "/**",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*", "/_next/*"],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL || "https://vakiltech.in"}/sitemap.xml`,
    ],
  },
};
