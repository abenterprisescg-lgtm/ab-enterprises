import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Use a simple dynamic import to get data without full module resolution issues in scripts
// Since we can't easily import src files in a node script without transpilation, 
// we will duplicate the slug list here for simplicity and reliability in this environment.
// Ideally, we would share the config or use a TS-node loader.

const blogSlugs = [
    'steel-prices-india-2026-forecast',
    'tmt-bars-buying-guide',
    'green-steel-sustainable-construction'
];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
    '/',
    '/products',
    '/services',
    '/about',
    '/clientele',
    '/careers',
    '/contact',
    '/brochure',
    '/terms',
    '/news'
];

const domain = 'https://www.ab-enterprises.co';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => `
    <url>
        <loc>${domain}${route}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}
    ${blogSlugs.map(slug => `
    <url>
        <loc>${domain}/news/${slug}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>
    `).join('')}
</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully at public/sitemap.xml');
