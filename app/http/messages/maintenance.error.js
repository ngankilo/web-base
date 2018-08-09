const GSOError = require('./gso.error');


class MaintenanceError extends GSOError {
    
    constructor () {
        super();
    }
    
    
    get status () {
        return 503;
    }
    
    get message () {
        return {
            code   : "GSO_MAINTENANCE",
            message: "Service not available, please try again later"
        };
    }
}

module.exports = MaintenanceError;