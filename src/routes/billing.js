import express from 'express';
import Stripe from 'stripe';

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Create checkout session
router.post('/create-checkout', async (req, res) => {
  try {
    const { priceId, apiKey } = req.body;
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: `${process.env.DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DOMAIN}/pricing`,
      client_reference_id: apiKey,
      metadata: {
        apiKey: apiKey
      }
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Webhook for Stripe events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object;
        // Update API key to Pro/Business tier
        console.log('Payment successful:', session.client_reference_id);
        break;
      
      case 'customer.subscription.deleted':
        // Downgrade API key to Free tier
        console.log('Subscription cancelled');
        break;
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
});

// Get pricing plans
router.get('/pricing', (req, res) => {
  res.json({
    plans: [
      {
        name: 'Free',
        price: 0,
        requests: 100,
        features: ['100 requests/month', 'Basic support', 'API key required']
      },
      {
        name: 'Pro',
        price: 29,
        priceId: process.env.STRIPE_PRO_PRICE_ID,
        requests: 10000,
        features: ['10,000 requests/month', 'Priority support', 'Custom domains']
      },
      {
        name: 'Business',
        price: 99,
        priceId: process.env.STRIPE_BUSINESS_PRICE_ID,
        requests: -1, // Unlimited
        features: ['Unlimited requests', '24/7 support', 'SLA guarantee', 'Dedicated IPs']
      }
    ]
  });
});

export { router as billingRouter };
