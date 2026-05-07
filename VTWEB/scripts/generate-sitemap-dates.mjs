/**
 * scripts/generate-sitemap-dates.mjs
 *
 * Reads the last git commit date for every page.tsx in src/app and outputs
 * src/app/sitemap-dates.ts — a static map of URL path → ISO date string.
 *
 * Run manually:    node scripts/generate-sitemap-dates.mjs
 * Runs auto:       npm run prebuild (hooked below in package.json)
 */

import { execSync } from "child_process";
import { readdirSync, statSync, writeFileSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const APP_DIR = join(ROOT, "src", "app");
const OUT_FILE = join(ROOT, "src", "app", "sitemap-dates.ts");

// ─── 1. Find every page.tsx (non-dynamic routes only) ─────────────────────────
function findPages(dir, pages = []) {
  for (const item of readdirSync(dir)) {
    const full = join(dir, item);
    if (statSync(full).isDirectory()) {
      findPages(full, pages);
    } else if (item === "page.tsx" || item === "page.ts") {
      pages.push(full);
    }
  }
  return pages;
}

function filePathToUrlPath(filePath) {
  const rel = relative(APP_DIR, filePath); // e.g. "about/page.tsx"
  const segments = rel.split("/").slice(0, -1); // drop "page.tsx"
  if (segments.length === 0) return "/";
  return "/" + segments.join("/");
}

// ─── 2. Get last git commit date for a file ────────────────────────────────────
function gitLastModified(filePath) {
  try {
    const rel = relative(ROOT, filePath);
    const iso = execSync(`git log --format="%aI" -n 1 -- "${rel}"`, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["pipe", "pipe", "ignore"],
    }).trim();
    return iso.length > 0 ? iso : null;
  } catch {
    return null;
  }
}

// ─── 3. Build the date map ─────────────────────────────────────────────────────
const FALLBACK = "2025-01-01T00:00:00+05:30"; // safe fallback for brand-new files
const pages = findPages(APP_DIR);
const dateMap = {};

for (const page of pages) {
  const urlPath = filePathToUrlPath(page);

  // Skip dynamic segments like [city] — those pages share the parent's date
  if (urlPath.includes("[")) continue;

  // Skip Next.js internals
  if (urlPath.startsWith("/api") || urlPath.startsWith("/_")) continue;

  const date = gitLastModified(page) ?? FALLBACK;
  dateMap[urlPath] = date;
}

// ─── 4. Write the generated TypeScript file ────────────────────────────────────
const sortedEntries = Object.entries(dateMap).sort(([a], [b]) =>
  a.localeCompare(b)
);

const lines = sortedEntries.map(
  ([path, date]) => `  "${path}": "${date}",`
);

const output = `// ⚠️  AUTO-GENERATED — do not edit manually.
// Regenerate with: node scripts/generate-sitemap-dates.mjs
// This file is committed to git so the sitemap always has real dates.
// It is refreshed automatically on every build (prebuild hook in package.json).

export const PAGE_DATES: Record<string, string> = {
${lines.join("\n")}
};

/** Look up the last-modified date for a URL path, with a fallback. */
export function pageDate(urlPath: string, fallback = "${FALLBACK}"): string {
  return PAGE_DATES[urlPath] ?? fallback;
}
`;

writeFileSync(OUT_FILE, output, "utf8");
console.log(
  `✅ sitemap-dates.ts generated — ${sortedEntries.length} pages with real git dates.`
);
