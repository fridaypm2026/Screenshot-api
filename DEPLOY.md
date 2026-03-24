# Deployment Guide

## Railway (Recommended - Free Tier)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/screenshot-api.git
git push -u origin main
```

2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repo
   - Add environment variables in Railway dashboard:
     - `PORT=3000`
     - `NODE_ENV=production`
   - Railway will auto-deploy

3. **Get your URL:**
   - Railway gives you: `https://screenshot-api-production.up.railway.app`
   - Add custom domain in settings (optional)

---

## Render

1. **Create account:** [render.com](https://render.com)
2. **New Web Service** → Connect GitHub repo
3. **Settings:**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Add PORT, NODE_ENV
4. Auto-deploys on git push

---

## Fly.io

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Login
flyctl auth login

# Launch (creates fly.toml)
flyctl launch

# Deploy
flyctl deploy

# Open in browser
flyctl open
```

---

## Vercel (Serverless)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set production
vercel --prod
```

Note: Puppeteer needs special config for Vercel. Use `chrome-aws-lambda` package.

---

## DigitalOcean App Platform

1. Go to [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
2. Create App → GitHub repo
3. Detect Node.js automatically
4. Set environment variables
5. Deploy ($5/mo)

---

## Environment Variables (Production)

Required:
```
NODE_ENV=production
PORT=3000
```

Optional (for Stripe billing):
```
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

Optional (for Redis queue):
```
REDIS_URL=redis://username:password@host:port
```

---

## Custom Domain Setup

### Railway
1. Settings → Domains
2. Add custom domain: `api.coldpike.com`
3. Add CNAME record in your DNS:
   ```
   CNAME api screenshot-api-production.up.railway.app
   ```

### Cloudflare (Recommended)
1. Add site to Cloudflare
2. Set DNS records:
   ```
   CNAME api screenshot-api-production.up.railway.app
   ```
3. Enable "Proxy" (orange cloud) for DDoS protection + caching

---

## Monitoring

### Railway (built-in)
- Logs: Railway dashboard → Logs tab
- Metrics: CPU, Memory, Requests

### External (optional)
- **Uptime monitoring:** [UptimeRobot](https://uptimerobot.com) (free)
- **Error tracking:** [Sentry](https://sentry.io) (free tier)
- **Analytics:** [PostHog](https://posthog.com) (free tier)

---

## SSL/HTTPS

All platforms provide free SSL automatically:
- Railway: ✅ Auto SSL
- Render: ✅ Auto SSL
- Fly.io: ✅ Auto SSL
- Vercel: ✅ Auto SSL

---

## Cost Estimates

| Platform | Free Tier | Paid (Starter) |
|----------|-----------|----------------|
| Railway | $5 credit/mo | $5/mo + usage |
| Render | Free (750hrs) | $7/mo |
| Fly.io | Free (3 small VMs) | $1.94/mo/VM |
| Vercel | Free (100GB) | $20/mo |
| DigitalOcean | $0 | $5/mo |

**Recommendation:** Start on Railway free tier, move to paid when you hit limits.

---

## Scaling

### Horizontal Scaling (multiple instances)
```bash
# Railway: increase replicas in settings
# Fly.io: 
flyctl scale count 3

# DigitalOcean: increase instance count in settings
```

### Vertical Scaling (bigger instance)
```bash
# Railway: upgrade plan in settings
# Fly.io:
flyctl scale vm shared-cpu-2x --memory 4096
```

---

## Backup & Disaster Recovery

1. **Code:** Always in GitHub (auto-backup)
2. **Environment variables:** Export from Railway/platform
3. **Database:** If you add one later, enable daily backups

---

## Health Checks

All platforms support health checks:

**Railway:**
```json
{
  "healthcheck": {
    "path": "/health",
    "interval": "30s"
  }
}
```

**Fly.io (fly.toml):**
```toml
[checks]
  [checks.health]
    path = "/health"
    interval = "30s"
```

---

## Next Steps After Deploy

1. ✅ Test API with `curl` or Postman
2. ✅ Set up custom domain
3. ✅ Add uptime monitoring
4. ✅ Enable error tracking
5. ✅ Launch on ProductHunt
