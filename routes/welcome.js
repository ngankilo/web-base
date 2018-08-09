const Middlewares = require('./../app/http/middlewares');
const Validation  = require('./../app/http/validation');
module.exports    = {
    middlewares: [],
    routes     : {
        home   : {
            url     : "/",
            method  : 'get',
            handlers: [
                'WelcomeController.show'
            ]
        },
        welcome: {
            url     : '/welcome',
            method  : "get",
            handlers: [
                'WelcomeController.index'
            ]
        }
    }
};