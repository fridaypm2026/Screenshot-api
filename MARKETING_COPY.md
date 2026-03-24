# Marketing Copy - All Platforms

## Twitter/X Launch Thread

🚀 Launching ScreenAPI Screenshot API

Turn any URL into a screenshot with ONE API call.

⚡ < 2sec response time
🔒 Secure & rate-limited
💰 Start FREE (100/mo)
📦 No infrastructure needed

Live now: [LINK]

---

Why we built this:

Existing screenshot APIs are either:
- Too slow (5-10s per request)
- Too expensive ($200+/mo for decent volume)
- Unreliable (random timeouts)

We fixed all three.

---

Pricing that makes sense:

FREE: 100 screenshots/month
PRO: $29/mo - 10K screenshots
BUSINESS: $99/mo - UNLIMITED

No hidden fees. No BS. Just screenshots.

---

Built with:
- Node.js + Express
- Puppeteer (headless Chrome)
- Railway hosting
- Stripe payments

Open source coming soon.

---

Try it RIGHT NOW:

```bash
curl -X POST [API_URL]/api/v1/screenshot \
  -H "X-API-Key: demo_key" \
  -d '{"url": "https://example.com"}'
```

First 100 signups get PRO free for 1 month. 🔥

---

## Reddit - r/SideProject

**Title:** [Launch] Built a screenshot API in 24 hours - now making money

**Body:**
Hey r/SideProject!

Yesterday I had an idea. Today it's live and taking payments.

**What:** ScreenAPI Screenshot API - turn any URL into a PNG screenshot via API
**Why:** Existing solutions are slow, expensive, or unreliable
**How:** Node.js + Puppeteer + Railway + Stripe

**Live now:** [LINK]

**Pricing:**
- Free: 100 screenshots/month
- Pro: $29/mo (10K screenshots)
- Business: $99/mo (unlimited)

**Revenue so far:** $0 (launched 30 minutes ago lol)

**Tech stack:**
- Backend: Express.js
- Screenshot: Puppeteer (headless Chrome)
- Hosting: Railway (insanely easy)
- Payments: Stripe
- Auth: API keys + rate limiting

**What I learned:**
1. Ship fast, iterate faster
2. Railway makes deployment stupid simple
3. Stripe checkout = 30 mins to payments
4. Don't overthink it

**Try it:**
Free tier, no credit card. Live API docs on the site.

Happy to answer questions!

---

## Reddit - r/webdev

**Title:** Built a screenshot API that doesn't suck - feedback wanted

**Body:**
Frustrated with slow/expensive screenshot APIs, so I built one.

**ScreenAPI Screenshot API:**
- POST any URL, get base64 PNG back
- < 2 second response time
- $29/mo for 10K screenshots (vs $200+ elsewhere)
- 100 free/month tier

**Live:** [LINK]

**API Example:**
```javascript
const response = await fetch('https://api.screenapi.ai.com/v1/screenshot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_key'
  },
  body: JSON.stringify({ url: 'https://example.com' })
});

const data = await response.json();
// data.screenshot = base64 PNG
```

**Use cases:**
- QA/monitoring
- Social previews
- Portfolio automation
- Compliance archiving

**Feedback wanted:**
- What features are missing?
- Pricing too high/low?
- What else would you screenshot?

Free tier available - try it and let me know what breaks.

---

## Indie Hackers

**Title:** Built & launched screenshot API in 24 hours - here's the playbook

**Post:**
Yesterday: idea
Today: live product taking payments

**Product:** ScreenAPI Screenshot API
**Revenue:** $0 → $? (just launched)
**Time to build:** 24 hours
**Time to deploy:** 10 minutes

**The Stack:**
- Node.js + Express (backend)
- Puppeteer (Chrome automation)
- Railway (hosting - SO good)
- Stripe (payments)
- GitHub (source)

**The Process:**
1. Validated idea: "Do screenshot APIs suck?" (yes)
2. Built MVP: Single POST endpoint
3. Added auth: API keys + rate limiting
4. Stripe integration: 30 mins
5. Deployed: Railway auto-deploy
6. Launched: ProductHunt + Reddit + Twitter

**Pricing Strategy:**
- Free tier (100/mo) - get users
- Pro ($29/mo) - serious devs
- Business ($99/mo) - agencies/SaaS

**What's working:**
- Simple API (one endpoint does everything)
- Generous free tier (build trust)
- Fast response time (<2s)

**What's next:**
- More output formats (JPEG, WebP)
- PDF generation
- Bulk API
- Webhooks

**Lessons:**
1. Ship >>> perfect
2. Railway makes DevOps disappear
3. Stripe is stupid easy
4. Free tier = growth hack

**Try it:** [LINK] (free tier, no CC)

Questions? Fire away.

---

## Email to Developer Communities

**Subject:** New screenshot API - free tier for devs

**Body:**
Hey [community],

I built a screenshot API because existing ones are slow/expensive.

**ScreenAPI Screenshot API:**
- Any URL → PNG in <2 seconds
- $29/mo for 10K screenshots
- 100 free/month (no CC required)

**Perfect for:**
- Website monitoring
- Social preview generation
- Automated testing
- Portfolio screenshots

**Live now:** [LINK]

**Example:**
```bash
curl -X POST https://api.screenapi.ai.com/v1/screenshot \
  -H "X-API-Key: your_key" \
  -d '{"url": "https://yoursite.com"}'
```

**Special for [community]:**
First 50 signups get Pro free for 2 months.

Docs: [LINK]
Pricing: [LINK]

Questions? Hit reply.

Friday
ScreenAPI
