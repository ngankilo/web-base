const GSOError = require('./gso.error');

class BadRequestError extends GSOError {
    
    constructor (message) {
        super();
        this.props = {
            code: "GSO_BAD_REQUEST",
            message
        };
    }
    
    get status () {
        return 400;
    }
    
    get message () {
        return this.props;
    }
}

module.exports = BadRequestError;