const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, 'articles.json');
const jsOutputPath = path.join(__dirname, 'articles.js');

let articles = [];
if (fs.existsSync(articlesPath)) {
    try {
        articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
    } catch (e) {
        console.error('\x1b[31m✗\x1b[0m Failed to parse articles.json:', e.message);
        articles = [];
    }
}

const jsContent = `var __ARTICLES__ = ${JSON.stringify(articles, null, 2)};`;
fs.writeFileSync(jsOutputPath, jsContent, 'utf-8');

console.log(`\x1b[32m✓\x1b[0m articles.js generated with \x1b[1m${articles.length}\x1b[0m articles`);
articles.forEach(a => {
    console.log(`\x1b[90m    - ${a.title}\x1b[0m`);
});
console.log(`\x1b[90m  -> articles.js\x1b[0m`);
