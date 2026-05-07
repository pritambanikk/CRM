import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Explicitly tell Turbopack where tailwindcss lives so it doesn't
  // walk up past the VTWEB directory and fail in the parent KAPSO folder.
  turbopack: {
    resolveAlias: {
      tailwindcss: "./node_modules/tailwindcss",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // ── Trailing-slash normalisation (C-02) ────────────────────────────────────
      // Must be listed first so it fires before any slug-specific rules below.
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      // ── Canonical URL fixes (C-01, C-03, C-04) ────────────────────────────────
      {
        source: '/legal-drafts-bundle',
        destination: '/3500-legal-drafts-templates-bundle',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/terms-of-use',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/send-a-legal-notice',
        destination: '/send-legal-notice',
        permanent: true,
      },
      {
        source: '/send-a-legal-notice/:path*',
        destination: '/send-legal-notice/:path*',
        permanent: true,
      },
      {
        source: '/legal-consultation',
        destination: '/consultation',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, HEAD, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, User-Agent',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, HEAD, OPTIONS',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
