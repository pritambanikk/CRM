import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowDown, ArrowLeftRight } from "lucide-react";

export interface RelatedLink {
  label: string;
  href: string;
  description?: string;
}

export interface RelatedLinksProps {
  /** Page one level up in the funnel (Awareness → this page, or Decision → this page) */
  upstream?: RelatedLink[];
  /** Page one level down in the funnel (this page → Decision or Action) */
  downstream?: RelatedLink[];
  /** Pages at the same intent level (sibling cluster members) */
  siblings?: RelatedLink[];
  className?: string;
}

/**
 * SW-03 — Shared related-links component.
 * Renders upstream / downstream / sibling link blocks per the §3 internal-link contract.
 * Mount on every new page shipped in Phase 2+.
 *
 * Usage:
 * ```tsx
 * <RelatedLinks
 *   upstream={[{ label: "What is a Legal Notice?", href: "/blogs/what-is-a-legal-notice-in-india" }]}
 *   downstream={[{ label: "Send a Legal Notice — ₹1,499", href: "/send-legal-notice" }]}
 *   siblings={[
 *     { label: "Legal Notice Format", href: "/blogs/legal-notice-format-india" },
 *     { label: "Legal Notice Fees", href: "/blogs/legal-notice-fees-india" },
 *   ]}
 * />
 * ```
 */
export function RelatedLinks({ upstream, downstream, siblings, className }: RelatedLinksProps) {
  const hasContent =
    (upstream && upstream.length > 0) ||
    (downstream && downstream.length > 0) ||
    (siblings && siblings.length > 0);

  if (!hasContent) return null;

  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {/* Upstream — read before this */}
      {upstream && upstream.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
              Background reading
            </span>
          </div>
          <ul className="space-y-2">
            {upstream.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200 hover:underline"
                >
                  <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5" />
                  <span>
                    <span className="font-medium">{link.label}</span>
                    {link.description && (
                      <span className="text-blue-600 dark:text-blue-400 ml-1">
                        — {link.description}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Downstream — next step */}
      {downstream && downstream.length > 0 && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ArrowDown className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Next step
            </span>
          </div>
          <ul className="space-y-2">
            {downstream.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-start gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-primary" />
                  <span>
                    <span className="font-medium">{link.label}</span>
                    {link.description && (
                      <span className="text-muted-foreground ml-1">
                        — {link.description}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Siblings — related reads at same level */}
      {siblings && siblings.length > 0 && (
        <div className="bg-muted/40 border border-border rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ArrowLeftRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Related reads
            </span>
          </div>
          <ul className="space-y-2">
            {siblings.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-start gap-2 text-sm text-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 text-muted-foreground" />
                  <span>
                    <span className="font-medium">{link.label}</span>
                    {link.description && (
                      <span className="text-muted-foreground ml-1">
                        — {link.description}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
