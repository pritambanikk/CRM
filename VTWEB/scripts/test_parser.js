const fs = require('fs');
const path = require('path');

function parseContentFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf-8');
  
  // Basic Regex parsers
  const extract = (pattern) => {
    const match = content.match(pattern);
    return match ? match[1].trim() : '';
  };

  const url = extract(/URL:\s*(.+)/);
  const title = extract(/Title:\s*(.+)/);
  const metaDesc = extract(/Meta Description:\s*(.+)/);
  const keywords = extract(/Keywords:\s*(.+)/);
  
  const slug = url.split('/').pop();

  return { slug, title, metaDesc, keywords, lines: content.split('\n') };
}

const file = path.join(__dirname, '../for_dev/send-legal-notice__zomato_content.txt');
console.log(parseContentFile(file));
