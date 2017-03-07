/**
 * Created by taras on 07.03.17.
 */

var express = require('express'),
    config      = require('./config'),
    app = express(),
    mailer = require('express-mailer');


module.exports =  function mailConnect(app) {
    mailer.extend(app, {
        from: config.get('mail').from,
        host: config.get('mail').host, // hostname
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        transportMethod: config.get('mail').transportMethod, // default is SMTP. Accepts anything that nodemailer accepts
        auth: {
            user: config.get('mail').auth.user,
            pass: config.get('mail').auth.pass
        }
    });
}
