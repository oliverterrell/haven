const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000;

export const cacheMiddleware = (req, res, next) => {
  const key = `${req.path}:${new URLSearchParams(req.query).toString()}`;
  const cachedResponse = cache.get(key);

  if (cachedResponse && Date.now() - cachedResponse.timestamp < CACHE_DURATION) {
    return res.json(cachedResponse.data);
  }

  const originalJson = res.json;
  res.json = function (data) {
    cache.set(key, {
      data,
      timestamp: Date.now(),
    });
    return originalJson.call(this, data);
  };

  next();
};

setInterval(() => {
  const now = Date.now();
  for (const [key, value] of cache.entries()) {
    if (now - value.timestamp > CACHE_DURATION) {
      cache.delete(key);
    }
  }
}, 60000);
