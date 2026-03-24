// Simple API key validation (MVP - no database yet)
// In production: store API keys in database with usage tracking

const API_KEYS = {
  'demo_key_12345': {
    plan: 'free',
    limit: 100,
    used: 0,
    name: 'Demo User'
  }
};

export function validateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'] || req.query.api_key;

  if (!apiKey) {
    return res.status(401).json({
      error: 'API key required',
      message: 'Include your API key in X-API-Key header or api_key query parameter'
    });
  }

  // For MVP: accept any non-empty key (we'll add real validation later)
  if (apiKey === 'demo_key_12345' || apiKey.length > 10) {
    req.apiKey = apiKey;
    req.user = API_KEYS[apiKey] || { plan: 'free', limit: 100, used: 0, name: 'User' };
    return next();
  }

  return res.status(401).json({
    error: 'Invalid API key',
    message: 'The provided API key is not valid'
  });
}

export function checkUsageLimit(req, res, next) {
  const user = req.user;

  // Check if user has exceeded their limit
  if (user.used >= user.limit) {
    return res.status(429).json({
      error: 'Usage limit exceeded',
      message: `You have reached your ${user.plan} plan limit of ${user.limit} requests. Upgrade your plan to continue.`,
      usage: {
        used: user.used,
        limit: user.limit,
        plan: user.plan
      }
    });
  }

  // Increment usage (in production: update database)
  user.used++;

  next();
}
