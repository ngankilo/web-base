const GSOError = require('./gso.error');

class UnexpectedError extends GSOError {
    
    constructor (message) {
        super();
        this.props = {
            code: "GSO_UNEXPECTED",
            message
        };
    }
    
    get status () {
        return 500;
    }
    
    get message () {
        return this.props;
    }
}

module.exports = UnexpectedError;