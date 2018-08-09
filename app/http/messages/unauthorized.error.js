const GSOError = require('./gso.error');

class UnAuthorizedError extends GSOError {
    
    constructor (message) {
        super();
        this.props = {
            code: "GSO_UNAUTHORIZED",
            message
        };
    }
    
    get status () {
        return 401;
    }
    
    get message () {
        return this.props;
    }
}

module.exports = UnAuthorizedError;