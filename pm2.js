require('dotenv').config();

module.exports = {
    apps: [
        
        {
            name        : 'API',
            script      : 'http.js',
            error_file  : '~/logs/node/error.log',
            out_file    : '~/logs/node/output.log',
            instances   : 'max',
            exec_mode   : 'cluster',
            watch       : true,
            ignore_watch: ['public', 'node_modules', 'server.conf', 'vendor']
        }
    ],
};
