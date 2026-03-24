# ScreenAPI Screenshot API

Generate website screenshots and PDFs via REST API.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## API Endpoints

### 1. Health Check
```bash
GET /health
```

### 2. Generate Screenshot
```bash
POST /api/v1/screenshot
Headers: X-API-Key: demo_key_12345
Body:
{
  "url": "https://example.com",
  "width": 1920,
  "height": 1080,
  "fullPage": false,
  "format": "png"
}
```

### 3. Generate PDF
```bash
POST /api/v1/pdf
Headers: X-API-Key: demo_key_12345
Body:
{
  "url": "https://example.com",
  "format": "A4",
  "landscape": false
}
```

## Example Usage

### cURL
```bash
curl -X POST http://localhost:3000/api/v1/screenshot \
  -H "Content-Type: application/json" \
  -H "X-API-Key: demo_key_12345" \
  -d '{"url": "https://example.com", "width": 1280, "height": 720}'
```

### Node.js
```javascript
const response = await fetch('http://localhost:3000/api/v1/screenshot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'demo_key_12345'
  },
  body: JSON.stringify({
    url: 'https://example.com',
    width: 1280,
    height: 720
  })
});

const data = await response.json();
console.log(data.screenshot); // Base64 image
```

### Python
```python
import requests

response = requests.post('http://localhost:3000/api/v1/screenshot', 
  headers={'X-API-Key': 'demo_key_12345'},
  json={
    'url': 'https://example.com',
    'width': 1280,
    'height': 720
  }
)

data = response.json()
print(data['screenshot'])  # Base64 image
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
PORT=3000
NODE_ENV=development
STRIPE_SECRET_KEY=sk_test_your_key
REDIS_URL=redis://localhost:6379
```

## Deployment

### Railway (Recommended)
1. Push to GitHub
2. Connect to Railway
3. Add environment variables
4. Deploy

### Docker
```bash
docker build -t screenshot-api .
docker run -p 3000:3000 screenshot-api
```

## Pricing Plans

| Plan | Price | Requests/mo |
|------|-------|-------------|
| Free | $0 | 100 |
| Starter | $29 | 10,000 |
| Pro | $99 | 100,000 |
| Enterprise | Custom | Unlimited |

## Support

- Docs: https://screenapi.com.com/docs
- Email: support@screenapi.com.com
- Discord: https://discord.gg/screenapi.com

## License

MIT License - see LICENSE file for details
