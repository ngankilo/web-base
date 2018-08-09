const GSOError = require('./gso.error');

class ForbiddenError extends GSOError {
    
    constructor (message) {
        super();
        this.props = {
            code: "GSO_FORBIDDEN",
            message
        };
    }
    
    get status () {
        return 403;
    }
    
    get message () {
        return this.props;
    }
}

module.exports = ForbiddenError;

