// For more configuration, see https://github.com/NodeRedis/node_redis

module.exports = {
    port    : process.env.REDIS_PORT || 6379,
    host    : process.env.REDIS_HOST || '127.0.0.1',
    family  : process.env.REDIS_FAMILY || 4,
    password: process.env.REDIS_PASSWORD || 'auth',
    db      : process.env.REDIS_DB || 0
};
