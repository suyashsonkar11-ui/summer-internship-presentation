const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function exportFullHdPresentationPdf() {
  const outputFileName = 'Summer Internship Presentation — Full HD 16x9.pdf';
  const outputPath = path.resolve(__dirname, outputFileName);

  console.log('================================================================');
  console.log('EXPORTING FULL HD 16:9 LANDSCAPE PRESENTATION PDF');
  console.log('Target Canvas: 1920 × 1080 px (16:9 Landscape)');
  console.log('Output File:', outputFileName);
  console.log('================================================================');

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=medium',
      '--enable-font-antialiasing',
      '--force-color-profile=srgb'
    ]
  });

  const page = await browser.newPage();

  // Set 1920x1080 Full HD viewport with high DPI scaling
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2
  });

  const indexPath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log('Loading presentation from:', indexPath);
  await page.goto(indexPath, { waitUntil: 'networkidle0' });

  // Ensure all web fonts are loaded
  await page.evaluateHandle('document.fonts.ready');
  console.log('All typography and web fonts ready.');

  // Ensure all images are loaded completely
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
        });
      })
    );
  });
  console.log('All high-resolution graphics and photographic assets ready.');

  // Pre-rendering verification
  const slideCount = await page.evaluate(() => {
    return document.querySelectorAll('.slide-card').length;
  });
  console.log(`Verified ${slideCount} total slides in presentation.`);

  // Activate dedicated PDF EXPORT MODE
  console.log('Activating dedicated PDF export mode (body.pdf-export-mode)...');
  await page.evaluate(() => {
    document.body.classList.add('pdf-export-mode', 'puppeteer-hd-export');
    document.querySelectorAll('.slide-card').forEach(slide => {
      slide.classList.add('in-view');
      slide.classList.remove('active');
    });
    const track = document.getElementById('slidesTrack');
    if (track) {
      track.style.transform = 'none';
    }
  });

  // Brief pause for CSS repaint & font/layout settlement
  await new Promise(resolve => setTimeout(resolve, 500));

  // Emulate print media type
  await page.emulateMediaType('print');

  // Generate the Full HD 16:9 Landscape PDF
  console.log('Rendering print-quality vector PDF...');
  await page.pdf({
    path: outputPath,
    width: '1920px',
    height: '1080px',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  await browser.close();

  // Validate output file
  if (fs.existsSync(outputPath)) {
    const stats = fs.statSync(outputPath);
    console.log('================================================================');
    console.log('SUCCESS: Full HD 16:9 Presentation PDF created!');
    console.log('Path:', outputPath);
    console.log('Size:', (stats.size / (1024 * 1024)).toFixed(2), 'MB');
    console.log('================================================================');
  } else {
    throw new Error('PDF file was not created.');
  }
}

exportFullHdPresentationPdf().catch(err => {
  console.error('Export error:', err);
  process.exit(1);
});
