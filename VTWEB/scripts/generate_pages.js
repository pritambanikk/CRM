const fs = require('fs');
const path = require('path');

const FOR_DEV_DIR = path.join(__dirname, '../for_dev');
const SRC_APP_DIR = path.join(__dirname, '../src/app');

// Pages to skip (Phase 1 or frozen)
const SKIP_FILES = [
  '_page_index.txt',
  'index_content.txt',
  'send-legal-notice_content.txt',
  'send-legal-notice__legal-notice-for-money-recovery_content.txt',
  'send-legal-notice__criminal-defamation-legal-notice_content.txt',
  'blogs__money-recovery-legal-notice-format-sample_content.txt'
];

function extractSection(content, sectionName) {
  // Allow uppercase letters, spaces, slashes, hyphens, and parentheses in section names, and allow multiple `─` trailing characters.
  const regex = new RegExp(`── ${sectionName} ─+\\n([\\s\\S]*?)(?=── [A-Z\\/ \\(\\)\\-]+ ─+|$)`, 'i');
  const match = content.match(regex);
  if (!match) return '';
  let extracted = match[1].trim();
  // Strip out decorative === lines
  extracted = extracted.replace(/^=+$/gm, '').trim();
  return extracted;
}

function parseSEO(seoText) {
  const result = {};
  const lines = seoText.split('\n');
  for (const line of lines) {
    const splitIdx = line.indexOf(':');
    if (splitIdx > -1) {
      const key = line.slice(0, splitIdx).trim();
      const value = line.slice(splitIdx + 1).trim();
      if (key === 'URL') result.url = value;
      if (key === 'Title') result.title = value;
      if (key === 'Meta Description') result.description = value;
      if (key === 'Keywords') result.keywords = value.split(',').map(s => s.trim());
    }
  }
  return result;
}

function parseBlogMeta(metaText) {
  const result = {};
  const lines = metaText.split('\n');
  for (const line of lines) {
    const splitIdx = line.indexOf(':');
    if (splitIdx > -1) {
      const key = line.slice(0, splitIdx).trim();
      const value = line.slice(splitIdx + 1).trim();
      if (key === 'Author') result.author = value;
      if (key === 'Last Updated') result.lastUpdated = value;
      if (key === 'Breadcrumb') result.breadcrumb = value.split('>').map(s => s.trim());
    }
  }
  return result;
}

function extractJSONLD(schemaText) {
  const schemas = [];
  const scriptRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = scriptRegex.exec(schemaText)) !== null) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch (e) {
      console.error("Error parsing JSON-LD schema:", e.message);
    }
  }
  return schemas;
}

function formatPageSectionsAsJSX(text) {
  let cleanText = text.replace(/<script[\s\S]*?<\/script>/g, '');
  const lines = cleanText.split('\n').map(l => l.trim()).filter(l => l);
  let jsx = '';
  let inList = false;
  let divOpen = false;
  let inFaqSection = false;
  let parsedFaqs = [];

  const escapeJSX = (str) => str.replace(/&/g, '&amp;').replace(/{/g, '{"{"}').replace(/}/g, '{"}"}').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('[') && line.endsWith(']')) {
      const heading = line.slice(1, -1);
      if (heading.toLowerCase().startsWith('faq')) {
        inFaqSection = true;
        continue;
      } else {
        inFaqSection = false;
      }
      
      if (inList) { jsx += '</ul>\n'; inList = false; }
      if (divOpen) { jsx += '</div>\n'; divOpen = false; }
      jsx += `<div className="bg-card border border-border rounded-xl p-6 shadow-sm mb-8">\n<h2 className="text-2xl font-bold text-foreground mb-4">${escapeJSX(heading)}</h2>\n`;
      divOpen = true;
    } else {
      if (inFaqSection) {
         if ((line.startsWith('▸') || line.startsWith('•') || line.startsWith('*')) && line.includes('?')) {
            parsedFaqs.push(line.replace(/^[▸•*]/, '').trim());
         }
      } else if (line.startsWith('▸') || line.startsWith('•') || line.startsWith('*')) {
        if (!inList) { jsx += '<ul className="list-disc pl-5 space-y-2 mt-4 text-muted-foreground">\n'; inList = true; }
        jsx += `<li>${escapeJSX(line.substring(1).trim())}</li>\n`;
      } else if (line.trim() !== '') {
        if (inList) { jsx += '</ul>\n'; inList = false; }
        jsx += `<p className="text-muted-foreground mb-4">${escapeJSX(line)}</p>\n`;
      }
    }
  }
  if (inList) { jsx += '</ul>\n'; }
  if (divOpen) { jsx += '</div>\n'; }
  return { jsx, parsedFaqs };
}

function processServiceTemplate(seo, schemas, jsxObj, routePath) {
  const { jsx: jsxContent, parsedFaqs } = jsxObj;
  const faqAnswersDb = require('./faq_answers');
  
  let finalFaqs = [];
  const faqSchemaIndex = schemas.findIndex(s => s['@type'] === 'FAQPage');
  if (faqSchemaIndex > -1) {
    const schema = schemas[faqSchemaIndex];
    if (schema.mainEntity && schema.mainEntity[0] && schema.mainEntity[0].acceptedAnswer) {
      finalFaqs = schema.mainEntity.map(q => ({
        question: q.name,
        answer: q.acceptedAnswer.text
      }));
    } else {
      schemas.splice(faqSchemaIndex, 1);
    }
  }

  if (finalFaqs.length === 0 && parsedFaqs.length > 0) {
    finalFaqs = parsedFaqs.map(q => ({
      question: q,
      answer: faqAnswersDb.getAnswer(q) || "Please contact our legal experts for a detailed consultation regarding this."
    }));
    
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": finalFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  const heroTitle = seo.title.split('|')[0].trim();
  
  return `import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TrustSignalsSection } from "@/components/features/homepage/trust-signals";
import { FAQSection } from "@/components/shared/faq-section";
import Link from 'next/link';
import ClientFormTrigger from "@/app/send-legal-notice/legal-notice-for-money-recovery/client-form-trigger";

export const metadata: Metadata = {
  title: "${seo.title.replace(/"/g, '\\"')}",
  description: "${(seo.description || '').replace(/"/g, '\\"')}",
  keywords: ${JSON.stringify(seo.keywords || [])},
  alternates: {
    canonical: "${seo.url}",
  },
};

export default function GeneratedServicePage() {
  const schemas = ${JSON.stringify(schemas, null, 2)};
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "${heroTitle.replace(/"/g, '\\"')}", current: true },
  ];

  const faqs: any[] = ${JSON.stringify(finalFaqs, null, 2)};

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/55">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      <div className="container mx-auto px-6 md:px-8 pb-8">
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden rounded-b-3xl md:rounded-b-[40px] -mx-6 md:-mx-8 px-6 md:px-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
          </div>

          <div className="relative max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
            <div className="z-10 mt-2 mb-2">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Professional Legal Service
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    ${heroTitle.replace(/{/g, '').replace(/}/g, '')}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    ${(seo.description || '').replace(/{/g, '').replace(/}/g, '')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/send-a-legal-notice"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Start Process
                  </Link>
                  <Link
                    href="/legal-consultation"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto py-12 space-y-6">
          ${jsxContent}
        </div>
      </div>

      <TrustSignalsSection />

      {faqs.length > 0 && (
         <FAQSection faqs={faqs} title="Frequently Asked Questions" />
      )}
    </main>
  );
}
`;
}

function processBlogTemplate(seo, blogMeta, schemas, jsxObj, routePath) {
  const { jsx: jsxContent } = jsxObj;
  const heroTitle = seo.title.split('|')[0].trim();
  const author = blogMeta.author || "VakilTech Legal Team";
  const date = blogMeta.lastUpdated || "23 January 2026";
  
  const hasArticleSchema = schemas.some(s => s['@type'] === 'Article' || s['@type'] === 'BlogPosting');
  if (!hasArticleSchema) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seo.title.replace(/"/g, '\\"'),
      "author": {
        "@type": "Organization", // Usually Person, but fallback to organization if team
        "name": author
      },
      "datePublished": "2026-01-23T00:00:00+05:30",
      "dateModified": "2026-01-23T00:00:00+05:30",
      "publisher": {
        "@type": "Organization",
        "name": "VakilTech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vakiltech.in/logo.png"
        }
      }
    });
  }
  
  return `import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Clock, Calendar, BookmarkPlus, Share2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "${seo.title.replace(/"/g, '\\"')}",
  description: "${(seo.description || '').replace(/"/g, '\\"')}",
  keywords: ${JSON.stringify(seo.keywords || [])},
  alternates: {
    canonical: "${seo.url}",
  },
};

export default function GeneratedBlogPage() {
  const schemas = ${JSON.stringify(schemas, null, 2)};
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    { label: "${heroTitle.replace(/"/g, '\\"')}", current: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            ${heroTitle.replace(/{/g, '').replace(/}/g, '')}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            ${(seo.description || '').replace(/{/g, '').replace(/}/g, '')}
          </p>

          <div className="flex flex-wrap items-center gap-6 pb-8 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                ${author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-foreground">${author}</p>
                <p className="text-xs text-muted-foreground">Legal Reviewer</p>
              </div>
            </div>

            <div className="flex items-center gap-6 ml-auto text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                ${date}
              </span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mb-16 text-foreground/90">
          ${jsxContent}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground rounded-2xl p-10 mb-16 overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Legal Assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/legal-consultation" className="group px-8 py-4 bg-background text-foreground rounded-lg font-semibold hover:bg-background/90 transition-all shadow-lg text-center inline-flex items-center justify-center gap-2">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
`;
}

async function run() {
  const files = fs.readdirSync(FOR_DEV_DIR).filter(f => f.endsWith('_content.txt'));
  
  let successCount = 0;
  let skipped = [];
  let generated = [];

  for (const file of files) {
    if (SKIP_FILES.includes(file)) {
      continue;
    }

    try {
      const content = fs.readFileSync(path.join(FOR_DEV_DIR, file), 'utf8');
      const isBlog = file.startsWith('blogs__');
      
      const seoText = extractSection(content, 'SEO');
      const seo = parseSEO(seoText);
      const schemaText = extractSection(content, 'SCHEMA / STRUCTURED DATA \\(JSON-LD\\)') || extractSection(content, 'SCHEMA');
      const schemas = extractJSONLD(schemaText);
      const pageSectionsText = extractSection(content, 'PAGE SECTIONS');
      const jsxObj = formatPageSectionsAsJSX(pageSectionsText);

      // Determine path
      let routePath = '';
      if (file.includes('__')) {
        routePath = file.replace('_content.txt', '').split('__').join('/');
      } else {
        routePath = file.replace('_content.txt', '');
      }

      const outDir = path.join(SRC_APP_DIR, routePath);
      fs.mkdirSync(outDir, { recursive: true });

      let fileContent = '';
      if (isBlog) {
        const metaText = extractSection(content, 'ARTICLE META');
        const blogMeta = parseBlogMeta(metaText);
        fileContent = processBlogTemplate(seo, blogMeta, schemas, jsxObj, routePath);
      } else {
        fileContent = processServiceTemplate(seo, schemas, jsxObj, routePath);
      }

      fs.writeFileSync(path.join(outDir, 'page.tsx'), fileContent);
      successCount++;
      generated.push(routePath);
    } catch (err) {
      console.error("Failed to process", file, err);
      skipped.push(file);
    }
  }

  console.log(JSON.stringify({ successCount, skipped, generated }));
}

run();
