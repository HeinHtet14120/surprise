const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/uploaded-photos/gallery');
const timelineDir = path.join(__dirname, '../public/images/uploaded-photos/timeline');
const optimizedGalleryDir = path.join(__dirname, '../public/images/optimized/gallery');
const optimizedTimelineDir = path.join(__dirname, '../public/images/optimized/timeline');

// Create optimized directories
[optimizedGalleryDir, optimizedTimelineDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function optimizeImage(inputPath, outputPath, maxWidth = 1920) {
  try {
    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath);

    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
  } catch (error) {
    console.error(`✗ Error optimizing ${path.basename(inputPath)}:`, error.message);
  }
}

async function optimizeDirectory(sourceDir, targetDir, maxWidth) {
  const files = fs.readdirSync(sourceDir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`\nOptimizing ${imageFiles.length} images from ${path.basename(sourceDir)}...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(sourceDir, file);
    const outputPath = path.join(targetDir, file.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));
    await optimizeImage(inputPath, outputPath, maxWidth);
  }
}

async function main() {
  console.log('Starting image optimization...');

  await optimizeDirectory(galleryDir, optimizedGalleryDir, 1200);
  await optimizeDirectory(timelineDir, optimizedTimelineDir, 1920);

  console.log('\n✓ Optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Check the optimized images in public/images/optimized/');
  console.log('2. Update config/site-content.ts to use /images/optimized/ instead of /images/uploaded-photos/');
}

main().catch(console.error);
