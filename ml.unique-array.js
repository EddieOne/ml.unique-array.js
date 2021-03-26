// CLI utility to create unique json arrays

var fs = require('fs');

let dupeArray = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
let uniqueArray = Array.from(new Set(dupeArray));
fs.writeFileSync(process.argv[3], JSON.stringify(uniqueArray));
