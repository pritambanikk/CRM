#!/usr/bin/env node
/**
 * scripts/fix-json-ld.mjs
 *
 * Replaces   {schemas.map((schema, index) => (<script .../>))}
 * with       <JsonLd schemas={schemas} pageId="<derived-id>" />
 * across every page.tsx that uses the old pattern.
 *
 * Also adds the JsonLd import to each modified file.
 *
 * Run: node scripts/fix-json-ld.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ─── Find all affected files ───────────────────────────────────────────────────
const raw = execSync(
  'grep -rl "schemas\\.map" src/app --include="*.tsx"',
  { cwd: ROOT, encoding: "utf8" }
).trim();

const files = raw.split("\n").filter(Boolean);
console.log(`Found ${files.length} files to update.\n`);

// ─── The exact multi-line block to replace ─────────────────────────────────────
// Note: we match the 6-line block as written in every page.tsx
const OLD_BLOCK =
  `      {schemas.map((schema, index) => (\n` +
  `        <script\n` +
  `          key={index}\n` +
  `          type="application/ld+json"\n` +
  `          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}\n` +
  `        />\n` +
  `      ))}`;

// ─── Derive a stable pageId from a file path ──────────────────────────────────
// e.g. src/app/send-legal-notice/cheque-bounce-legal-notice/page.tsx
//   → "cheque-bounce-legal-notice"
// e.g. src/app/page.tsx → "home"
// e.g. src/app/blogs/how-to-send-legal-notice-in-india/page.tsx
//   → "how-to-send-legal-notice-in-india"
function derivePageId(relPath) {
  // strip trailing /page.tsx
  const withoutPage = relPath.replace(/\/page\.tsx$/, "");
  // strip leading src/app/
  const withoutPrefix = withoutPage.replace(/^src\/app\/?/, "");

  if (!withoutPrefix || withoutPrefix === "page.tsx") return "home";

  // Take the last path segment (most specific identifier)
  const segments = withoutPrefix.split("/");
  return segments[segments.length - 1];
}

// ─── Import line to insert ─────────────────────────────────────────────────────
const JSON_LD_IMPORT = `import { JsonLd } from "@/components/shared/json-ld";`;

let updatedCount = 0;
let skippedCount = 0;

for (const filePath of files) {
  const absPath = join(ROOT, filePath);
  let content = readFileSync(absPath, "utf8");

  if (!content.includes(OLD_BLOCK)) {
    console.warn(`  ⚠️  Block not found verbatim in ${filePath} — skipping`);
    skippedCount++;
    continue;
  }

  const pageId = derivePageId(filePath);
  const newBlock = `      <JsonLd schemas={schemas} pageId="${pageId}" />`;

  // 1. Replace the old schema block
  content = content.replace(OLD_BLOCK, newBlock);

  // 2. Add JsonLd import if not already present
  if (!content.includes(JSON_LD_IMPORT)) {
    // Insert after the last existing import line
    const lastImportIdx = content.lastIndexOf("\nimport ");
    if (lastImportIdx !== -1) {
      // Find the end of that import line
      const lineEnd = content.indexOf("\n", lastImportIdx + 1);
      content =
        content.slice(0, lineEnd + 1) +
        JSON_LD_IMPORT +
        "\n" +
        content.slice(lineEnd + 1);
    } else {
      // Prepend if no imports found (shouldn't happen)
      content = JSON_LD_IMPORT + "\n" + content;
    }
  }

  writeFileSync(absPath, content, "utf8");
  console.log(`  ✅  ${filePath}  (pageId: "${pageId}")`);
  updatedCount++;
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Updated : ${updatedCount} files`);
console.log(`Skipped : ${skippedCount} files (pattern not found verbatim)`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
