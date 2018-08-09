// Native mongodb client configuration
module.exports = {
    host    : process.env.MONGO_HOST || 'mongodb://localhost:27017/',
    database: process.env.MONGO_DB || 'dev'
};
