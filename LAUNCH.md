# Launch Checklist - Screenshot API

## Pre-Launch (Week Before)

### 1. Product Polish
- [x] API working locally
- [ ] Test all endpoints (screenshot, PDF)
- [ ] Error handling (invalid URLs, timeouts)
- [ ] Rate limiting working
- [ ] Response times < 5 seconds

### 2. Documentation
- [ ] API docs complete (docs/API.md)
- [ ] Code examples (Node.js, Python, cURL)
- [ ] Postman collection
- [ ] Video tutorial (5 min walkthrough)

### 3. Landing Page
- [ ] Build simple landing page:
  - Hero: "Screenshot API - $29/mo for 10k screenshots"
  - Features: Fast, reliable, simple
  - Pricing table
  - Live demo/playground
  - Sign up form (email capture)
- [ ] Deploy to coldpike.com/screenshot-api

### 4. Payment Setup
- [ ] Stripe account verified
- [ ] Create products in Stripe:
  - Free: $0 (100/mo)
  - Starter: $29 (10k/mo)
  - Pro: $99 (100k/mo)
- [ ] Test checkout flow
- [ ] Webhook for subscription updates

---

## Launch Day (ProductHunt)

### Timing
- **Post at:** 12:01 AM PST
- **Monitor:** All day (respond to comments)

### ProductHunt Post Template

**Title:** Screenshot API - Generate website screenshots in one API call

**Tagline:** Headless Chrome as a service. No infrastructure, no headaches.

**Description:**
```
We built Screenshot API so you don't have to manage Puppeteer yourself.

🚀 What it does:
- Generate website screenshots (PNG, JPEG, WebP)
- Convert web pages to PDF
- Full-page captures
- Custom viewport sizes
- One API call, instant results

💰 Pricing:
- Free: 100 screenshots/month
- Starter: $29/mo (10,000 screenshots)
- Pro: $99/mo (100,000 screenshots)

🛠️ Perfect for:
- Social media schedulers (link previews)
- Marketing tools (automated reports)
- No-code platforms (Bubble, Webflow plugins)
- Web scraping (visual data)

⚡ Why us vs competitors?
- $29 starter tier (vs $99 elsewhere)
- Simple API (3 parameters = screenshot)
- 99.9% uptime SLA
- Open-source wrapper libraries

Try free: https://coldpike.com/screenshot-api
Docs: https://coldpike.com/docs
```

**First Comment (post immediately):**
```
👋 Hey Product Hunt! I'm Jack, founder of Coldpike.

I built this because I was tired of managing Puppeteer infrastructure 
for every project. Spinning up Chrome, handling crashes, scaling... 
it's a pain.

So I packaged it into a simple REST API. One endpoint, instant screenshots.

🎁 LAUNCH SPECIAL: First 100 sign-ups get Pro plan free for 3 months.
Use code: PRODUCTHUNT100

Happy to answer any questions! What would you use this for?
```

### Launch Day Actions
- [ ] 12:01 AM: Post on ProductHunt
- [ ] 12:05 AM: First comment with promo code
- [ ] 6:00 AM: Cross-post to:
  - Reddit (r/SideProject, r/EntrepreneurRideAlong)
  - IndieHackers
  - Twitter/X
  - HackerNews "Show HN"
- [ ] All day: Respond to every comment
- [ ] Tweet progress updates every 2 hours

---

## Week 1 - Content Blitz

### Blog Posts (publish 1/day)
1. **Mon:** "How to Generate Website Screenshots with Node.js"
2. **Tue:** "Screenshot API vs Puppeteer: Which Should You Use?"
3. **Wed:** "Building a Link Preview Tool in 10 Minutes"
4. **Thu:** "Best Screenshot APIs Compared (2026)"
5. **Fri:** "How We Built a Screenshot API in 48 Hours"

Publish on:
- Dev.to
- Hashnode
- Medium
- Your blog

### Social Media
- **Twitter:** 3 tweets/day
  - Technical tips
  - Use cases
  - Customer wins
- **LinkedIn:** 1 post/day (same content, more formal)

### Communities
- Post in:
  - r/webdev
  - r/coding
  - Stack Overflow (answer screenshot questions)
  - Discord dev communities

---

## Month 1 - Growth

### Google Ads ($30/day)
Keywords:
- screenshot api
- html to image api
- website screenshot service
- pdf generation api

### Cold Outreach (10/day)
Target:
- No-code tool builders
- Social media schedulers
- Marketing agencies

### Partnerships
Reach out to:
- Bubble (no-code platform)
- Zapier (automation)
- Webflow (website builder)

---

## Metrics to Track

### Daily
- [ ] Sign-ups (free)
- [ ] Conversions (free → paid)
- [ ] API usage
- [ ] Errors/downtime

### Weekly
- [ ] MRR (Monthly Recurring Revenue)
- [ ] Churn rate
- [ ] Customer feedback
- [ ] Support tickets

### Goals
- **Week 1:** 50 sign-ups, 5 paying ($145 MRR)
- **Month 1:** 200 sign-ups, 20 paying ($580 MRR)
- **Month 3:** 1000 sign-ups, 100 paying ($2.9k MRR)
- **Month 6:** 5000 sign-ups, 500 paying ($14.5k MRR)

---

## Support Setup

### Documentation
- [ ] API docs published
- [ ] FAQ page
- [ ] Troubleshooting guide
- [ ] Video tutorials

### Communication
- [ ] Support email: support@coldpike.com
- [ ] Discord server (optional)
- [ ] Twitter for public updates

### SLA
- Response time: < 24 hours
- Uptime guarantee: 99.9%
- Status page: status.coldpike.com

---

## Post-Launch Iteration

### Week 2-4: Listen & Improve
- Review all feedback
- Fix bugs immediately
- Add most-requested features
- Improve docs based on questions

### Common Feature Requests (anticipate)
- [ ] Webhooks (async processing)
- [ ] Batch screenshots
- [ ] Custom headers/cookies
- [ ] JavaScript execution delay
- [ ] S3/CloudFlare upload

Add these based on demand, not assumptions.

---

## Legal/Compliance

- [ ] Terms of Service
- [ ] Privacy Policy
- [ ] GDPR compliance (if EU customers)
- [ ] Stripe terms accepted
- [ ] Business entity formed (LLC recommended)

---

## Launch Resources

### Templates
- Landing page: Use Vercel templates (free)
- Email: ConvertKit free tier
- Analytics: Plausible (privacy-friendly)

### Tools
- Uptime monitoring: UptimeRobot (free)
- Error tracking: Sentry (free tier)
- Analytics: PostHog (free tier)

---

## Final Check Before Launch

- [ ] API deployed and tested
- [ ] Landing page live
- [ ] Payment processing works
- [ ] Docs complete
- [ ] ProductHunt post drafted
- [ ] Social media accounts ready
- [ ] Support email working
- [ ] Monitoring setup
- [ ] Domain/SSL working

---

**Launch Date:** _____________

**Goal MRR (Month 1):** $500

**Goal MRR (Month 6):** $10,000

Let's ship it. 🚀
