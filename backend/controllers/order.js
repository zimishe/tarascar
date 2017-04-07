/**
 * Created by taras on 16.03.17.
 */
var winston = require('winston');
var express = require('express');
var polyline = require('polyline');

var order = require('../models/order');
let trip = require('./trips');
var expressValidator = require('express-validator'), bodyParser = require('body-parser');

mailer = require('express-mailer');

module.exports.controller = function (app) {
    app.use(expressValidator());

    app.post('/order', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        let trip_id = req.body.trip_id;
        let from = req.body.user_from;
        let to = req.body.user_to;
        let field = makeRadius(from.lat,from.lng,'meta_v',null,'radiusStepS');
        console.log(field);
        order.setFiled(field);
        order.setHaving('radiusStepS<10','and');
        order.getTripInfoId(trip_id);
    });
}