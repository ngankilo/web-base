require('app-module-path')
    .addPath(__dirname)
;
require('dotenv').load();
const config       = require('config');
const bootstrap    = require('bootstrap');
const Container    = require('library/container');
const EventEmitter = require('events').EventEmitter;

(async () => {
    let container  = await bootstrap(config, new Container(new EventEmitter()));
    let httpKernel = await container.make('http.kernel');
    let router     = await container.make('http.router');
    httpKernel
        .use(router.routes())
        .use(router.allowedMethods())
    ;

    httpKernel.listen(config.http.port, () => console.log(`Server started at port: ${config.http.port}`));
})().catch(error => {
    console.error(error);
    process.exit(error.code);
});
