import puppeteer from 'puppeteer';

let browser = null;

// Initialize browser pool
async function getBrowser() {
  if (!browser || !browser.isConnected()) {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });
  }
  return browser;
}

export async function captureScreenshot({ url, width = 1920, height = 1080, fullPage = false, format = 'png' }) {
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    // Set viewport
    await page.setViewport({ width, height });

    // Navigate with timeout
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Take screenshot
    const screenshot = await page.screenshot({
      type: format,
      fullPage,
      encoding: 'binary'
    });

    return screenshot;
  } finally {
    await page.close();
  }
}

export async function generatePDF({ url, format = 'A4', landscape = false }) {
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    // Navigate with timeout
    await page.goto(url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Generate PDF
    const pdf = await page.pdf({
      format,
      landscape,
      printBackground: true
    });

    return pdf;
  } finally {
    await page.close();
  }
}

// Cleanup on exit
process.on('exit', async () => {
  if (browser) {
    await browser.close();
  }
});
