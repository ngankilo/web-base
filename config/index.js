require('dotenv').load();

module.exports = {

    // Services will be used for the application
    providers: [
        require('library/database/database.provider'),
        require('library/http/http.provider'),
        require('library/mongo/mongo.provider'),
        require('library/hash/hash.provider'),
        require('library/log/log.provider'),
        require('library/serializer/serializer.provider'),
        require('library/redis/redis.provider'),
        require('library/storage/storage-factory.provider'),
        require('library/console/console.provider'),
        require('library/mail/mail.provider'),
        require('library/view-engine-nunjucks/nunjucks.provider'),
        require('library/view/view.provider'),
        require('library/url/url.provider'),
        require('library/meta-injector/meta-injector.provider'),
        require('library/routing/routing.provider'),

        require('library/paginator/paginator.provider'),

        // Application providers
        // add more providers to extend the application functionality
        require('app/app.provider'),

        // Repository

        require('src/provider'),

    ],

    injects: [
        // Injects dependencies by its metadata here
        require('app/http/handlers/welcome.controller'),
    ],

    // Services related configuration
    author   : require('./author'),
    database : require('./database'),
    mongo    : require('./mongo'),
    hash     : require('./hash'),
    http     : require('./http'),
    log      : require('./log'),
    redis    : require('./redis'),
    cache    : require('./cache'),
    paginator: require('./paginator'),
    view     : require('./view'),
    mail     : require('./mail')
};
