const lodash         = require('lodash');
const SuccessMessage = require('./success.message');

class EntityMessage extends SuccessMessage {
    
    constructor (message) {
        super();
        this.props = message
    }
    
    get status () {
        return 200;
    }
    
    get message () {
        return lodash.extend({code: "GSO_SUCCESS"}, this.props);
    }
    
}

module.exports = EntityMessage;