import fs from "fs";
import path from "path";
import { indianCities } from "../src/data/indian-cities";
import { legalNoticeTopics } from "../src/data/legal-notice-topics";

// You will need to run this script with your Gemini API key (Free tier is usually available):
// GEMINI_API_KEY="AIza..." npx tsx scripts/generate-city-case-studies.ts

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// To avoid rate limits on the free tier, test with a smaller batch first.
// Change these limits to fully scale once you approve the output!
const TOP_CITIES_LIMIT = 30;
const TOP_TOPICS_LIMIT = 30;

// Helper function to sleep to avoid rate limits (Gemini free tier allows ~15 RPM)
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function generateWithLLM(topicTitle: string, cityName: string) {
  const prompt = `
You are an expert Indian legal copywriter for VakilTech, a premium legal notice platform. 
Write a highly realistic, human-touch case study about a user in ${cityName} who used a "${topicTitle}" notice.

CRITICAL INSTRUCTIONS TO AVOID DUPLICATE CONTENT PATTERNS:
1. Do not use a repetitive formula. Vary the length, tone, and paragraph structure wildly.
2. Inject hyper-local socio-economic contexts. Use real neighborhood names in ${cityName}, realistic business types (e.g., a garment exporter, a freelance designer, a local sweet shop owner).
3. The monetary amounts, timelines, and resolution methods MUST be completely random and realistic.
4. Sometimes the resolution is a fast settlement. Sometimes it's a dramatic 11th-hour payment before going to court. Sometimes they ignored the notice and our lawyers successfully guided them to file an FIR/Suit.
5. Sound like a boutique law firm sharing a success story, NOT an AI. Make it empathetic but professional.

Return ONLY a valid JSON object matching this exact structure:
{
  "title": "A catchy, journalistic headline (e.g., 'Freelance Developer in Indiranagar Recovers 3 Lakhs from Agency')",
  "scenario": "A 2-4 sentence paragraph describing the human struggle, the local context, and the legal problem.",
  "action": "A 1-3 sentence paragraph describing the specific legal drafting and dispatch strategy VakilTech used.",
  "resolution": "A 1-3 sentence paragraph describing the outcome."
}`;

  if (!GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY environment variable. Run with GEMINI_API_KEY='AIza...' npx tsx scripts/generate...");
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.9,
        responseMimeType: "application/json",
      }
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`API Error for ${topicTitle} in ${cityName}:`, err);
    return null;
  }

  const data = await response.json();
  const rawText = data.candidates[0].content.parts[0].text;
  return JSON.parse(rawText);
}

async function main() {
  if (!GEMINI_API_KEY) {
    console.error("❌ ERROR: You must provide a GEMINI_API_KEY.");
    console.log("Run the script like this:");
    console.log("GEMINI_API_KEY='AIzaSy...' npx tsx scripts/generate-city-case-studies.ts");
    process.exit(1);
  }

  console.log(`Starting LLM Generation Engine...`);
  console.log(`Targeting top ${TOP_TOPICS_LIMIT} topics across ${TOP_CITIES_LIMIT} cities for the initial batch.`);

  // Load existing studies to avoid overwriting and burning credits if script fails halfway
  const outputPath = path.resolve(process.cwd(), "src/data/generated/city-case-studies.json");
  let caseStudies: Record<string, any> = {};
  if (fs.existsSync(outputPath)) {
    caseStudies = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
  }

  const testCities = indianCities.slice(0, TOP_CITIES_LIMIT);
  const testTopics = legalNoticeTopics.slice(0, TOP_TOPICS_LIMIT);

  let count = 0;

  for (const topic of testTopics) {
    for (const city of testCities) {
      const citySlug = city.city.toLowerCase().replace(/ /g, "-");
      const key = `${topic.id}_${citySlug}`;

      // Skip if we already generated it!
      if (caseStudies[key] && !caseStudies[key].scenario.includes("{area}")) {
        console.log(`⏭️ Skipping ${key} (Already exists)`);
        continue;
      }

      console.log(`🤖 Generating unique human-touch case study for ${topic.title} in ${city.city}...`);

      try {
        const result = await generateWithLLM(topic.title, city.city);
        if (result) {
          caseStudies[key] = result;
          count++;

          // Save incrementally so we don't lose data if the script crashes
          fs.writeFileSync(outputPath, JSON.stringify(caseStudies, null, 2), "utf-8");

          // Sleep for 1 second to avoid OpenAI Rate Limits
          await sleep(1000);
        }
      } catch (error) {
        console.error(`Failed on ${key}:`, error);
      }
    }
  }

  console.log(`\n✅ Successfully generated and saved ${count} fully unique, human-like AI case studies to JSON!`);
}

main().catch(console.error);
