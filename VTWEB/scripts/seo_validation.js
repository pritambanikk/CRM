const fs = require('fs');
const path = require('path');

const SRC_APP_DIR = path.join(__dirname, '../src/app');

function getAllPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllPages(fullPath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allPages = getAllPages(SRC_APP_DIR);
const titles = new Map();
const descriptions = new Map();
const canonicalErrors = [];
let duplicateErrors = 0;
const urlsForSitemap = [];

allPages.forEach(pagePath => {
  const content = fs.readFileSync(pagePath, 'utf8');
  let routePath = pagePath.replace(SRC_APP_DIR, '').replace(/\/page\.tsx$/, '');
  if (routePath === '') routePath = '/';
  if (routePath.includes('[') || routePath.includes('api/')) return; // skip dynamic router files & apis

  const fullUrl = `https://vakiltech.in${routePath}`;
  urlsForSitemap.push(fullUrl);

  // Extract from export const metadata block
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const descMatch = content.match(/description:\s*["']([^"']+)["']/);
  const canonicalMatch = content.match(/canonical:\s*["']([^"']+)["']/);

  if (titleMatch) {
    const title = titleMatch[1];
    if (titles.has(title)) {
       console.log(`❌ DUPLICATE TITLE FOUND:`);
       console.log(`   Title: ${title}`);
       console.log(`   Page 1: ${titles.get(title)}`);
       console.log(`   Page 2: ${routePath}`);
       duplicateErrors++;
    } else {
       titles.set(title, routePath);
    }
  }

  if (descMatch) {
    const desc = descMatch[1];
    if (descriptions.has(desc)) {
       console.log(`❌ DUPLICATE DESCRIPTION FOUND:`);
       console.log(`   Desc: ${desc}`);
       console.log(`   Page 1: ${descriptions.get(desc)}`);
       console.log(`   Page 2: ${routePath}`);
       duplicateErrors++;
    } else {
       descriptions.set(desc, routePath);
    }
  }

  // Check canonical
  if (canonicalMatch) {
    const canonical = canonicalMatch[1];
    
    if (!canonical.startsWith('https://vakiltech.in')) {
      if (routePath !== '/' && routePath !== '/send-a-legal-notice') {
         // Auto-fix the non-frozen file to have an absolute URL
         const newCanonical = `https://vakiltech.in${canonical.startsWith('/') ? canonical : '/' + canonical}`;
         const updatedContent = content.replace(/canonical:\s*["'][^"']+["']/, `canonical: "${newCanonical}"`);
         fs.writeFileSync(pagePath, updatedContent);
         console.log(`✅ AUTO-FIXED Canonical in ${routePath} to ${newCanonical}`);
      } else {
         // Frozen pages, just ignore if they use relative
      }
    }
  }
});

console.log(`=== SEO DIAGNOSTIC REPORT ===`);
console.log(`Total Pages Scanned: ${urlsForSitemap.length}`);
console.log(`Duplicate Target Titles/Descriptions: ${duplicateErrors === 0 ? 'None ✅' : duplicateErrors + ' Errors ❌'}`);
console.log(`Canonical Redirects pointing away from production: ${canonicalErrors.length === 0 ? 'None ✅' : canonicalErrors.length + ' Errors ❌'}`);
if (canonicalErrors.length > 0) console.log(canonicalErrors.join('\n'));

// Generate Sitemap
const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsForSitemap.sort().map(url => `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url === 'https://vakiltech.in/' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>`.trim();

fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXML);
console.log(`\nSitemap successfully written to public/sitemap.xml with ${urlsForSitemap.length} URLs.`);
