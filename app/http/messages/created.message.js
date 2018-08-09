const lodash         = require('lodash');
const SuccessMessage = require('./success.message');

class CreatedMessage extends SuccessMessage {
    constructor (message = {success: true}) {
        super();
        this.props = message
    }
    
    get status () {
        return 201;
    }
    
    get message () {
        return lodash.extend({code: 'GSO_CREATED'}, this.props);
    }
    
}

module.exports = CreatedMessage;