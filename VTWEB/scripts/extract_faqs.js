const fs = require('fs');
const path = require('path');
const FOR_DEV_DIR = path.join(__dirname, '../for_dev');

function extractSection(content, sectionName) {
  const regex = new RegExp(`── \\s*${sectionName}\\s*─+\\n([\\s\\S]*?)(?=── [^─\\n]+ ─+|$)`, 'i');
  const match = content.match(regex);
  if (!match) return '';
  return match[1].replace(/^=+$/gm, '').trim();
}

const files = fs.readdirSync(FOR_DEV_DIR).filter(f => f.includes('__') && f.endsWith('_content.txt'));
const questionsSet = new Set();
const filesNeedingFaqs = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(FOR_DEV_DIR, file), 'utf8');
  const pageSections = extractSection(content, 'PAGE SECTIONS');
  
  if (pageSections) {
    const lines = pageSections.split('\n');
    let inFaq = false;
    for (const line of lines) {
      if (line.match(/^\[FAQ/)) {
         inFaq = true;
         filesNeedingFaqs.push(file);
      } else if (line.match(/^\[/)) {
         inFaq = false;
      }
      
      if (inFaq && (line.trim().startsWith('▸') || line.trim().startsWith('*') || line.trim().startsWith('•')) && line.includes('?')) {
        let q = line.replace(/^[▸*•]/, '').trim();
        questionsSet.add(q);
      }
    }
  }
}

const questions = Array.from(questionsSet);
console.log(`Total Unique Questions: ${questions.length}`);
console.log(questions.join('\n'));
