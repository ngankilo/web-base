const Message = require('./http/messages');
const routes  = require('./../routes');
const lodash  = require('lodash');
const Router  = require('koa-router');

exports.register = async (container) => {
    container.singleton('message', () => Message);
};

exports.boot = async (container) => {

    let routerDecorator = await container.make('http.router.decorator');
    let generalRouter   = await container.make('http.router');

    routerDecorator.decorate(routes, generalRouter);
};
