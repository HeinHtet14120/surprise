const fs = require('fs');
const path = require('path');

// SVG placeholder generator
function generateSVG(width, height, text, bgColor, textColor) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

// Image configurations
const images = [
  // Hero image
  { path: 'public/images/hero.jpg', width: 1920, height: 1080, text: 'Hero Image', bg: '#fda4af', color: '#fff' },

  // Timeline year images
  { path: 'public/images/year-1.jpg', width: 1200, height: 800, text: 'Year 1', bg: '#fb7185', color: '#fff' },
  { path: 'public/images/year-2.jpg', width: 1200, height: 800, text: 'Year 2', bg: '#fda4af', color: '#fff' },
  { path: 'public/images/year-3.jpg', width: 1200, height: 800, text: 'Year 3', bg: '#fecdd3', color: '#292524' },
  { path: 'public/images/year-4.jpg', width: 1200, height: 800, text: 'Year 4', bg: '#ffe4e6', color: '#292524' },
  { path: 'public/images/year-5.jpg', width: 1200, height: 800, text: 'Year 5', bg: '#fff1f2', color: '#292524' },

  // Gallery images
  { path: 'public/images/gallery/first-date.jpg', width: 1000, height: 1000, text: 'First Date', bg: '#f43f5e', color: '#fff' },
  { path: 'public/images/gallery/adventure-1.jpg', width: 1000, height: 1000, text: 'Adventure', bg: '#fb7185', color: '#fff' },
  { path: 'public/images/gallery/cozy-night.jpg', width: 1000, height: 1000, text: 'Cozy Night', bg: '#fda4af', color: '#fff' },
  { path: 'public/images/gallery/celebration.jpg', width: 1000, height: 1000, text: 'Celebration', bg: '#fecdd3', color: '#292524' },
  { path: 'public/images/gallery/travel-1.jpg', width: 1000, height: 1000, text: 'Travel', bg: '#ffe4e6', color: '#292524' },
  { path: 'public/images/gallery/candid-laugh.jpg', width: 1000, height: 1000, text: 'Laughter', bg: '#fff1f2', color: '#292524' },
  { path: 'public/images/gallery/sunset.jpg', width: 1000, height: 1000, text: 'Sunset', bg: '#fecdd3', color: '#292524' },
  { path: 'public/images/gallery/silly-moment.jpg', width: 1000, height: 1000, text: 'Silly', bg: '#fda4af', color: '#fff' },
  { path: 'public/images/gallery/anniversary.jpg', width: 1000, height: 1000, text: 'Anniversary', bg: '#fb7185', color: '#fff' },
  { path: 'public/images/gallery/everyday-love.jpg', width: 1000, height: 1000, text: 'Everyday', bg: '#f43f5e', color: '#fff' },
];

// Generate SVG files
console.log('Generating placeholder images...\n');

images.forEach(img => {
  const svg = generateSVG(img.width, img.height, img.text, img.bg, img.color);
  const dir = path.dirname(img.path);

  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Write SVG file (we'll save as .svg instead of .jpg for simplicity)
  const svgPath = img.path.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  console.log(`✓ Created: ${svgPath}`);
});

console.log('\n✅ All placeholder images generated successfully!');
console.log('\nNote: Images are in SVG format. For production, replace with actual JPG/PNG photos.');
