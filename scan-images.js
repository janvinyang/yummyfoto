const fs = require('fs');
const path = require('path');

const CATEGORIES = {
    documentary: { label: '人文纪实', filter: 'documentary' },
    landscape: { label: '风光摄影', filter: 'landscape' },
    food: { label: '美食摄影', filter: 'food' },
    still: { label: '静物产品', filter: 'still' },
    portrait: { label: '人像', filter: 'portrait' }
};

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif'];

const imagesDir = path.join(__dirname, 'images');
const manifest = { categories: {}, works: [] };

for (const [folder, meta] of Object.entries(CATEGORIES)) {
    const folderPath = path.join(imagesDir, folder);
    manifest.categories[folder] = meta;

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        continue;
    }

    const files = fs.readdirSync(folderPath)
        .filter(file => {
            const ext = path.extname(file).toLowerCase();
            return IMAGE_EXTENSIONS.includes(ext);
        })
        .sort();

    files.forEach((file) => {
        const nameWithoutExt = path.basename(file, path.extname(file));
        const title = nameWithoutExt
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());

        const isWide = file.toLowerCase().includes('wide');

        manifest.works.push({
            src: `images/${folder}/${file}`,
            title: title,
            category: meta.filter,
            categoryLabel: meta.label,
            featured: isWide
        });
    });
}

const jsonOutputPath = path.join(imagesDir, 'manifest.json');
fs.writeFileSync(jsonOutputPath, JSON.stringify(manifest, null, 2), 'utf-8');

const jsContent = `var __GALLERY_MANIFEST__ = ${JSON.stringify(manifest, null, 2)};`;
const jsOutputPath = path.join(imagesDir, 'manifest.js');
fs.writeFileSync(jsOutputPath, jsContent, 'utf-8');

const totalImages = manifest.works.length;
console.log(`\x1b[32m\u2713\x1b[0m manifest generated with \x1b[1m${totalImages}\x1b[0m images`);
for (const [folder, meta] of Object.entries(CATEGORIES)) {
    const count = manifest.works.filter(w => w.category === meta.filter).length;
    console.log(`    ${meta.label}: ${count} images`);
}
console.log(`\x1b[90m  -> images/manifest.json\x1b[0m`);
console.log(`\x1b[90m  -> images/manifest.js\x1b[0m`);
