const babel = require('babel-core');
const path = require('path');
const fs = require('fs');


const entry = path.resolve('./src/index.js');

if (!fs.existsSync(entry)) {
  return;
}

const stream = fs.readFileSync(entry); 
const build = babel.transform(stream);

if (!build) {
  return;
}

fs.writeFileSync('./dist/index.js', build.code);
