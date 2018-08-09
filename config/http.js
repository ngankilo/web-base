const path = require('path');

module.exports = {
    port  : process.env.HTTP_PORT || 3000,
    host  : process.env.HTTP_HOST || 'localhost:3000',
    secure: process.env.HTTP_SECURE || false,
    asset : '/',

    // Global middlewares
    middlewares: [

        // Uncomment the middleware bellow to enable system development error reporting
        require('./../app/http/middlewares/handler-error'),

        // Uncomment the middleware bellow to enable session service

        // Uncomment the middleware bellow to serve static content by the framework
        // require('koa-static')(path.normalize(path.join(__dirname, '..', 'public'))),
        require('koa-bodyparser')(),
    ],
    router     : {
        // prefix: `/${process.env.VERSION || "v1.0"}`
    }
};
