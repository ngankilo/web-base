const Message  = require('./../messages');
module.exports = async (context, next) => {
    let config = await context.container.make('config');
    try {
        await next();
        if (context.body instanceof Message.SuccessMessage) {
            context.status = context.body.status;
            context.body   = context.body.message;
            return;
        }
        switch (context.status) {
            case 405:
                context.status = 405;
                context.body   = {
                    code   : "GSO_METHOD_NOT_ALLOWED",
                    contact: config.author
                };
                break;
            case 404:
                context.status = 404;
                context.body   = {
                    code   : "GSO_NOT_FOUND",
                    contact: config.author
                };
            default:
                break;
        }

    } catch (error) {

        if (error instanceof Message.GSOError) {
            context.status = error.status;
            context.body   = error.message;
        } else {
            context.status = 500;
            context.body   = {
                code   : "GSO_UNEXPECTED_ERROR",
                message: "Server unexpected service"
            };
            console.log(error);
        }

        let logger = await context.container.make('log');

        logger.error(error);
    }
};
