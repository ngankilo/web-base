class GSOError extends Error {

    constructor (message = {}) {
        super();
    }

    /**
     *
     * @returns {number}
     */
    get status () {
        return 100;
    }

    /**
     *
     * @returns {{}}
     */
    get message () {
        return {}
    }
}

module.exports = GSOError;