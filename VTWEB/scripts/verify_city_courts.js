const fs = require('fs');
const path = require('path');

const SRC_APP_DIR = path.join(__dirname, '../src/app/send-legal-notice');
const CITIES = {
  'bangalore': 'Karnataka',
  'chennai': 'Madras',
  'delhi': 'Delhi',
  'hyderabad': 'Telangana',
  'mumbai': 'Bombay',
  'kolkata': 'Calcutta',
  'jaipur': 'Rajasthan'
};

function checkDirectory(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(checkDirectory(fullPath));
    } else if (entry.name === 'page.tsx') {
      const city = Object.keys(CITIES).find(c => fullPath.includes(`/${c}/`));
      if (city) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Look for 'High Court' references, supporting both '[State] High Court' and 'High Court of [State]'.
        const courtRegex = /(?:([A-Za-z]+)\s+High\s+Court)|(?:High\s+Court\s+of\s+([A-Za-z]+))/gi;
        let match;
        let foundCourts = new Set();
        const noiseWords = ['with', 'and', 'the', 'a', 'your', 'any', 'local', 'by', 'of', 'for', 'to', 'in', 'state', 'district', 'supreme'];
        while ((match = courtRegex.exec(content)) !== null) {
          const matchedState = (match[1] || match[2]).toLowerCase();
          if (!noiseWords.includes(matchedState)) {
             foundCourts.add(matchedState.charAt(0).toUpperCase() + matchedState.slice(1));
          }
        }
        
        results.push({
          path: fullPath.split('src/app/')[1],
          expectedCourtPrefix: CITIES[city],
          foundCourts: Array.from(foundCourts),
          isClean: foundCourts.size === 0 || Array.from(foundCourts).every(c => c.toLowerCase() === CITIES[city].toLowerCase())
        });
      }
    }
  }
  return results;
}

const allCityResults = checkDirectory(SRC_APP_DIR);
let cleanCount = 0;

console.log("==================================================");
console.log("HIGH COURT VERIFICATION REPORT");
console.log("==================================================\n");

allCityResults.forEach(res => {
  const status = res.isClean ? "✅ PASS" : "❌ FAIL";
  console.log(`${status} | ${res.path}`);
  if (res.foundCourts.length > 0) {
    console.log(`         Expected: ${res.expectedCourtPrefix} High Court`);
    console.log(`         Found:    ${res.foundCourts.join(', ')} High Court`);
  } else {
    console.log(`         Expected: ${res.expectedCourtPrefix} High Court`);
    console.log(`         Found:    (No High Court specifically mentioned)`);
  }
  console.log('');
  if (res.isClean) cleanCount++;
});

console.log("==================================================");
console.log(`SUMMARY: ${cleanCount}/${allCityResults.length} City Pages Passed Strict Localization Validation`);
console.log("==================================================");
