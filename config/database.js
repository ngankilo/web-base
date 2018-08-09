const path = require('path');
require('dotenv').config({path: './../.env'});

// Database configuration
// For more options see http://knexjs.org
module.exports[process.env.NODE_ENV] = {
    client          : 'mysql',
    connection      : {
        host    : process.env.DB_HOST || '127.0.0.1',
        user    : process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'root',
        database: process.env.DB_NAME || 'GSO'
    },
    useNullAsDefault: true,
    migrations      : {
        directory: path.normalize(path.join(__dirname, '..', 'database', 'migrations')),
        tableName: 'migrations'
    },
    seeds           : {
        directory: path.normalize(path.join(__dirname, '..', 'database', 'seeds')),
    }
};