const Message = require('./../messages');

class WelcomeController {
    constructor (config) {
        this.config = config;
    }

    static get dependencies () {
        return ['config'];
    }

    async index (context) {
        context.body = new Message.SuccessMessage({contact: this.config.author});
    }

    async show (context) {
        context.body = new Message.SuccessMessage({contact: this.config.author});
    }
}

module.exports = WelcomeController;