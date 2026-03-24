import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { screenshotRouter } from './routes/screenshot.js';
import { healthRouter } from './routes/health.js';
import { billingRouter } from './routes/billing.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting (global)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});
app.use(limiter);

// Routes
app.use('/health', healthRouter);
app.use('/api/v1', screenshotRouter);
app.use('/api/v1/billing', billingRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Screenshot.io API',
    version: '1.0.0',
    docs: 'https://screenshot.io/docs',
    endpoints: {
      health: '/health',
      screenshot: '/api/v1/screenshot',
      pdf: '/api/v1/pdf'
    }
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Screenshot API running on port ${PORT}`);
  console.log(`📸 Ready to capture screenshots`);
  console.log(`📄 Docs: http://localhost:${PORT}/`);
});
