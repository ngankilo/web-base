const lodash = require('lodash');

class SuccessMessage {
    
    constructor (message = {success: true}) {
        this.props = message;
    }
    
    get status () {
        return 200;
    }
    
    get message () {
        return lodash.extend({code: "GSO_SUCCESS"}, this.props);
    }
    
}

module.exports = SuccessMessage;