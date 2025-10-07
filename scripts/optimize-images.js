const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  { file: 'hero.webp', maxWidth: 1200 },
  { file: 'contact.webp', maxWidth: 1200 },
  { file: 'about.webp', maxWidth: 800 }
];

async function optimizeImages() {
  const publicDir = path.join(__dirname, '../public');

  for (const { file, maxWidth } of images) {
    const inputPath = path.join(publicDir, file);
    const backupPath = path.join(publicDir, `${file}.backup`);

    // Create backup
    fs.copyFileSync(inputPath, backupPath);
    console.log(`✓ Backed up ${file} to ${file}.backup`);

    // Get original dimensions
    const metadata = await sharp(inputPath).metadata();
    console.log(`  Original: ${metadata.width}x${metadata.height} (${(fs.statSync(inputPath).size / 1024).toFixed(0)}KB)`);

    // Resize and compress
    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(inputPath + '.tmp');

    // Replace original
    fs.renameSync(inputPath + '.tmp', inputPath);

    const newMetadata = await sharp(inputPath).metadata();
    const newSize = fs.statSync(inputPath).size;
    console.log(`  Optimized: ${newMetadata.width}x${newMetadata.height} (${(newSize / 1024).toFixed(0)}KB)`);
    console.log(`  Saved: ${((metadata.size - newSize) / 1024).toFixed(0)}KB\n`);
  }

  console.log('✅ All images optimized!');
  console.log('💡 Backups saved as *.webp.backup (delete them once you verify everything looks good)');
}

optimizeImages().catch(console.error);
