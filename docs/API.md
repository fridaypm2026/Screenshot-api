# Coldpike Screenshot API Documentation

## Base URL
```
https://api.coldpike.com/v1
```

## Authentication

All requests require an API key in the `X-API-Key` header:

```bash
X-API-Key: your_api_key_here
```

Get your API key: [https://coldpike.com/dashboard](https://coldpike.com/dashboard)

---

## Endpoints

### 1. Generate Screenshot

Capture a screenshot of any website.

**Endpoint:** `POST /screenshot`

**Headers:**
```
Content-Type: application/json
X-API-Key: your_api_key
```

**Request Body:**
```json
{
  "url": "https://example.com",
  "width": 1920,
  "height": 1080,
  "fullPage": false,
  "format": "png"
}
```

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| url | string | Yes | - | Website URL to screenshot |
| width | integer | No | 1920 | Viewport width in pixels |
| height | integer | No | 1080 | Viewport height in pixels |
| fullPage | boolean | No | false | Capture full scrollable page |
| format | string | No | png | Image format (png, jpeg, webp) |

**Response:**
```json
{
  "success": true,
  "url": "https://example.com",
  "screenshot": "data:image/png;base64,iVBORw0KGgo...",
  "metadata": {
    "width": 1920,
    "height": 1080,
    "fullPage": false,
    "format": "png",
    "size": 245678,
    "duration": "1234ms"
  },
  "timestamp": "2026-03-23T18:00:00.000Z"
}
```

---

### 2. Generate PDF

Convert any website to PDF.

**Endpoint:** `POST /pdf`

**Headers:**
```
Content-Type: application/json
X-API-Key: your_api_key
```

**Request Body:**
```json
{
  "url": "https://example.com",
  "format": "A4",
  "landscape": false
}
```

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| url | string | Yes | - | Website URL to convert |
| format | string | No | A4 | Page format (A4, Letter, Legal, etc.) |
| landscape | boolean | No | false | Page orientation |

**Response:**
```json
{
  "success": true,
  "url": "https://example.com",
  "pdf": "data:application/pdf;base64,JVBERi0xLjcKC...",
  "metadata": {
    "format": "A4",
    "landscape": false,
    "size": 456789,
    "duration": "2345ms"
  },
  "timestamp": "2026-03-23T18:00:00.000Z"
}
```

---

## Error Responses

All errors return a JSON object with an `error` field:

```json
{
  "error": "Invalid URL format",
  "message": "The provided URL is not valid",
  "timestamp": "2026-03-23T18:00:00.000Z"
}
```

**Common Error Codes:**

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Missing or invalid API key |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

---

## Rate Limits

Rate limits are based on your subscription plan:

| Plan | Requests/Month | Rate Limit |
|------|----------------|------------|
| Free | 100 | 10/min |
| Starter | 10,000 | 100/min |
| Pro | 100,000 | 1000/min |
| Enterprise | Unlimited | Custom |

**Rate Limit Headers:**

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1679580000
```

---

## Code Examples

### JavaScript (Node.js)

```javascript
const response = await fetch('https://api.coldpike.com/v1/screenshot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_api_key_here'
  },
  body: JSON.stringify({
    url: 'https://example.com',
    width: 1280,
    height: 720
  })
});

const { screenshot } = await response.json();

// Save to file
const fs = require('fs');
const base64Data = screenshot.replace(/^data:image\/\w+;base64,/, '');
fs.writeFileSync('screenshot.png', base64Data, 'base64');
```

### Python

```python
import requests
import base64

response = requests.post(
  'https://api.coldpike.com/v1/screenshot',
  headers={'X-API-Key': 'your_api_key_here'},
  json={
    'url': 'https://example.com',
    'width': 1280,
    'height': 720
  }
)

data = response.json()

# Save to file
with open('screenshot.png', 'wb') as f:
  f.write(base64.b64decode(data['screenshot'].split(',')[1]))
```

### cURL

```bash
curl -X POST https://api.coldpike.com/v1/screenshot \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your_api_key_here" \
  -d '{
    "url": "https://example.com",
    "width": 1280,
    "height": 720
  }' \
  | jq -r '.screenshot' \
  | base64 -d > screenshot.png
```

---

## Best Practices

1. **Cache results** - Screenshots are expensive. Cache when possible.
2. **Use webhooks** - For long-running captures, use our webhook system.
3. **Optimize parameters** - Smaller viewports = faster screenshots.
4. **Handle errors** - Always implement retry logic with exponential backoff.
5. **Monitor usage** - Check your dashboard regularly to avoid hitting limits.

---

## Support

- **Email:** support@coldpike.com
- **Discord:** [https://discord.gg/coldpike](https://discord.gg/coldpike)
- **Status:** [https://status.coldpike.com](https://status.coldpike.com)
