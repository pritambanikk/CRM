interface JsonLdProps {
  schemas: Record<string, unknown>[];
  pageId: string;
}

/**
 * Renders all page schemas as a single <script type="application/ld+json"> tag.
 *
 * PLACEMENT IS CRITICAL — this component MUST be placed OUTSIDE the <main> element,
 * as a direct child of a React Fragment (<>), for it to be emitted as a standalone
 * <script> tag in the HTML rather than buried in Next.js RSC streaming chunks.
 *
 * CORRECT usage in every page.tsx:
 *   return (
 *     <>
 *       <JsonLd schemas={schemas} pageId="page-name" />
 *       <main>...</main>
 *     </>
 *   );
 *
 * Why plain <script> instead of next/script with strategy="beforeInteractive":
 * next/script only works from root layout.tsx — calling it from individual
 * Server Component pages does NOT hoist it to the <head>; it still ends up
 * in __next_f streaming chunks. Plain <script> as a fragment sibling of
 * <main> renders as a real standalone tag that Google and AI crawlers can read.
 *
 * Schemas are combined into a single script tag as an array — Google's schema
 * parser handles array-wrapped schemas correctly.
 */
export function JsonLd({ schemas }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
