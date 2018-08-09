const GSOError = require('./gso.error');

class NotFoundError extends GSOError {
    
    constructor (message) {
        super();
        this.props = {
            code: "GSO_NOT_FOUND",
            message
        }
    }
    
    get status () {
        return 404;
    }
    
    get message () {
        return this.props;
    }
}

module.exports = NotFoundError;