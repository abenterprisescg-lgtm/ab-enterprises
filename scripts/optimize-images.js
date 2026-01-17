
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
// We don't process dist directly, we process public and then the build will copy them.
// Actually, we might want to process assets that are directly imported if they aren't in public, 
// but for this project it seems most assets are in public based on previous `ls`.

const dirsToProcess = [publicDir];

// Recursive function to get all files
const getFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            results.push(file);
        }
    });
    return results;
};

const processImages = async () => {
    console.log('Starting image optimization...');

    let allFiles = [];
    dirsToProcess.forEach(dir => {
        if (fs.existsSync(dir)) {
            allFiles = allFiles.concat(getFiles(dir));
        }
    });

    const imageFiles = allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.png', '.jpg', '.jpeg'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images to process.`);

    for (const file of imageFiles) {
        const ext = path.extname(file);
        const name = path.basename(file, ext);
        const dir = path.dirname(file);
        const webpPath = path.join(dir, `${name}.webp`);

        if (!fs.existsSync(webpPath)) {
            try {
                await sharp(file)
                    .webp({ quality: 80 })
                    .toFile(webpPath);
                console.log(`Generated: ${path.relative(rootDir, webpPath)}`);
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        } else {
            console.log(`Skipping (already exists): ${path.relative(rootDir, webpPath)}`);
        }
    }

    console.log('Image optimization complete.');
};

processImages();
