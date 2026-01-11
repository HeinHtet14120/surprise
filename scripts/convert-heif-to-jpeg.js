const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/images/uploaded-photos/gallery');
const timelineDir = path.join(__dirname, '../public/images/uploaded-photos/timeline');

function checkFFmpeg() {
  try {
    execSync('which ffmpeg', { encoding: 'utf8' });
    return true;
  } catch (error) {
    console.error('❌ FFmpeg not found. Please install it first:');
    console.error('   brew install ffmpeg');
    return false;
  }
}

function convertImageToJPEG(inputPath, outputPath) {
  try {
    const inputStats = fs.statSync(inputPath);
    const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);

    console.log(`Converting ${path.basename(inputPath)}...`);

    // Use FFmpeg to convert HEIF/HEIC to JPEG with high quality
    // -qscale:v 2 = high quality (1-31 scale, 2-5 is very high quality)
    // -vf scale=-1:-1 = preserve original dimensions
    execSync(
      `ffmpeg -i "${inputPath}" -qscale:v 2 -vf "scale='iw':'ih'" -y "${outputPath}" 2>/dev/null`,
      { encoding: 'utf8' }
    );

    const outputStats = fs.statSync(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${path.basename(inputPath)}: ${inputSizeMB}MB → ${outputSizeMB}MB (${savings}% ${savings > 0 ? 'smaller' : 'larger'})`);

    // Create .jpg file (keep original HEIC)
    const finalPath = inputPath.replace(/\.(heic|HEIC)$/i, '.jpg');
    fs.renameSync(outputPath, finalPath);

    return true;
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

function convertDirectory(dir) {
  const files = fs.readdirSync(dir);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|JPG|JPEG|heic|HEIC)$/i.test(f));

  console.log(`\nProcessing ${imageFiles.length} images in ${path.basename(dir)}...\n`);

  let successCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(dir, file);
    const outputFileName = file.replace(/\.(heic|HEIC)$/i, '.jpg');
    const tempOutputPath = path.join(dir, `temp_${outputFileName}`);

    if (convertImageToJPEG(inputPath, tempOutputPath)) {
      successCount++;
    }
  }

  console.log(`\n✓ Successfully converted ${successCount}/${imageFiles.length} images in ${path.basename(dir)}\n`);

  return successCount;
}

async function main() {
  console.log('🔄 HEIF/HEIC to JPEG Conversion Tool\n');
  console.log('This will convert all iPhone photos to standard JPEG format.\n');

  // Check if FFmpeg is installed
  if (!checkFFmpeg()) {
    process.exit(1);
  }

  console.log('✓ FFmpeg found\n');
  console.log('Starting conversion...\n');
  console.log('━'.repeat(60));

  let totalConverted = 0;

  // Convert gallery images
  if (fs.existsSync(galleryDir)) {
    totalConverted += convertDirectory(galleryDir);
  }

  // Convert timeline images
  if (fs.existsSync(timelineDir)) {
    totalConverted += convertDirectory(timelineDir);
  }

  console.log('━'.repeat(60));
  console.log(`\n✅ Conversion complete! ${totalConverted} images converted.\n`);
  console.log('Next steps:');
  console.log('1. Verify images display in your browser');
  console.log('2. The script has already replaced the original files');
  console.log('3. Restart your Next.js dev server to see the changes\n');
}

main().catch(console.error);
