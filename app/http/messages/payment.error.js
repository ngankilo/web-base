const GSOError = require('./gso.error');

class PaymentError extends GSOError {
    
    constructor (message) {
        super();
        this.props = {
            code: "GSO_PAYMENT_ERROR",
            message
        };
        
    }
    
    get status () {
        return 402;
    }
    
    get message () {
        return this.props;
        
    }
}

module.exports = PaymentError;