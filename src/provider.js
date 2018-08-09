const validate       = require('validate.js');

exports.register = async (container) => {
    container.singleton('validator', async () => {
        validate.formatters.custom = (errors) => {
            let result = {};
            errors.map(function (error) {
                if (!result[error.attribute]) {
                    return result[error.attribute] = error.error
                }
            });
            
            return result;
        };
        
        return validate;
    });
    
};

exports.boot = async (container) => {
    const events = await container.make('events');
    const mailer = await container.make('mailer');
    events.on('mail.sender', async (params) => {
        let email = await mailer.compose(params.template, params.data);
        email.subject(params.subject).to(params.to);
        await email.send();
    });
};