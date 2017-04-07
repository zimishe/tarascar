/**
 * Created by taras on 16.03.17.
 */
var winston = require('winston');
var express = require('express');
var polyline = require('polyline');
let async = require("async");
var order = require('../models/order');
let trip = require('./trips');
var expressValidator = require('express-validator'), bodyParser = require('body-parser');

mailer = require('express-mailer');

module.exports.controller = function (app) {
    app.use(expressValidator());

    app.post('/order', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        //console.log(req.body.user_id);
        let trip_id = req.body.trip_id;
        let from = req.body.user_from;
        let to = req.body.user_to;
        let user_id = req.body.user_id;
        let field = makeRadius(from.lat,from.lng,'meta_v',null,'radiusStepS');
        console.log(field);
        order.setFiled(field);
        order.setHaving('radiusStepS<10','and');

        async.waterfall([
            function (callback) {

                order.getTripInfoId(trip_id,function(err,id){
                    if (err) {
                        callback(new Error("failed getting something:" + err.message));
                        // we should return here
                    }
                    callback(null, id);
                })
            }
        ], done);

        console.log(start_pos);
    });
}