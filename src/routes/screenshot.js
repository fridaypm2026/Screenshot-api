import express from 'express';
import { captureScreenshot, generatePDF } from '../services/capture.js';
import { validateApiKey, checkUsageLimit } from '../middleware/auth.js';

const router = express.Router();

// POST /api/v1/screenshot
router.post('/screenshot', validateApiKey, checkUsageLimit, async (req, res, next) => {
  try {
    const { url, width = 1920, height = 1080, fullPage = false, format = 'png' } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Validate URL
    try {
      new URL(url);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    const startTime = Date.now();
    const screenshot = await captureScreenshot({
      url,
      width: parseInt(width),
      height: parseInt(height),
      fullPage: fullPage === true || fullPage === 'true',
      format
    });

    const duration = Date.now() - startTime;

    res.json({
      success: true,
      url,
      screenshot: `data:image/${format};base64,${screenshot.toString('base64')}`,
      metadata: {
        width: parseInt(width),
        height: parseInt(height),
        fullPage,
        format,
        size: screenshot.length,
        duration: `${duration}ms`
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

// POST /api/v1/pdf
router.post('/pdf', validateApiKey, checkUsageLimit, async (req, res, next) => {
  try {
    const { url, format = 'A4', landscape = false } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    // Validate URL
    try {
      new URL(url);
    } catch (e) {
      return res.status(400).json({ error: 'Invalid URL format' });
    }

    const startTime = Date.now();
    const pdf = await generatePDF({
      url,
      format,
      landscape: landscape === true || landscape === 'true'
    });

    const duration = Date.now() - startTime;

    res.json({
      success: true,
      url,
      pdf: `data:application/pdf;base64,${pdf.toString('base64')}`,
      metadata: {
        format,
        landscape,
        size: pdf.length,
        duration: `${duration}ms`
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

export { router as screenshotRouter };
