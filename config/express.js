const express = require('express');
const hbs = require('express-handlebars');
const databese = require('../config/database');
const { init: storage } = require('./storage');
const router = require('./routes');

module.exports = async (app) => {
    app.engine('hbs', hbs({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

    app.use(express.static('public'));
    app.use(express.static('static'));

    app.use(express.urlencoded({
        extended: true
    }));

    await databese(app);
    app.use(await storage());

    app.use(router);
}