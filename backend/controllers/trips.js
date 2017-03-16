/**
 * Created by taras on 16.03.17.
 */
var winston = require('winston');
var express = require('express');

var users = require('../models/user');
var expressValidator = require('express-validator');

mailer = require('express-mailer');

module.exports.controller = function (app) {
    app.post('/trip', function (req, res) {
        if (!req.body) return res.sendStatus(400);

        var errors = [{}];
        var data = req.body;
        var s = 0;

    });
}