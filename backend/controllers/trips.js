/**
 * Created by taras on 16.03.17.
 */
var winston = require('winston');
var express = require('express');
var polyline = require('polyline');

var trips = require('../models/trips');
var expressValidator = require('express-validator'), bodyParser = require('body-parser');

mailer = require('express-mailer');

module.exports.controller = function (app) {
    //console.log(polyline.decode('"e}{nH}a{qCACYg@"'));
    app.use(expressValidator());

    app.post('/trip', function (req, res) {
        if (!req.body) return res.sendStatus(400);

        var errors = [{}];
        var data = req.body;
        var s = 0;
        // console.log(data);
        req.checkBody("startText", "Enter start point").notEmpty();
        req.checkBody("endText", "Enter finish point").notEmpty();
        req.checkBody("formPrice", "Enter price per one person").notEmpty();
        req.checkBody("formPlacesCount", "Enter quantity of place").notEmpty();
        req.checkBody("startTime", "Enter quantity of place").notEmpty();

        errors = req.validationErrors();

        if (errors) {
            res.json({s: s, errors: errors});
            return false;
        } else {
            var steps = [];
            data.steps.forEach(function (val, index, arr) {
                steps.push(arr[index]);
            });
            //console.log(steps);
            var tripData = {
                owner_id: data.userID,
                start_point_lat: data.startCoords.lat,
                start_point_lng: data.startCoords.lng,
                end_point_lat: data.endCoords.lat,
                end_point_lng: data.endCoords.lng,
                quantity: data.formPlacesCount,
                price: data.formPrice,
                date_start: data.startTime,
                date_end: data.endTime,
                start_name: data.startText,
                end_name: data.endText,
                duration: data.durationStamp
            };

            var promise = new Promise(function (resolve, reject) {
                trips.create(tripData, steps, function (e, result) {
                    if (e != null) {
                        console.log(e);
                    } else {
                        resolve(result);
                    }
                });
            });

            promise.then(function (id) {
                console.log(id);
                if (id > 0) {
                    s = 1;
                }

                return res.json({s: s, errors: errors});
            });
        }
        //return res.sendStatus(200);

    });

    app.post('/search', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        //console.log(req.body);
        var errors = [{}];
        var data = req.body;
        var s = 0;
        var start = JSON.parse(JSON.stringify(data.from));
        var end = JSON.parse(JSON.stringify(data.to));

        var latS = start.lat, lngS = start.lng, latE = end.lat, lngE = end.lng;
        var radiusStart = 0, radiusEnd = 0;
        if (latS && lngS && latE && lngE) {

            makeRadius(latS,lngS,'start_point_lat','start_point_lng','radiusStart');
            makeRadius(latE,lngE,'end_point_lat','end_point_lng','radiusEnd');
            makeRadius(latS,lngS,'meta_v',null,'radiusStep');

            trips.setWhere("quantity>0");
            trips.setWhere("DATE(t.date_start)>=DATE(CURDATE())","and");

            trips.get(function(err,result){
                s = 1;
                res.json({result:result,s:s});
            });
        }

        return true;
    });

    makeRadius = function(lat,lng,fieldLat,fieldLng,alias) {
        var field;
        if(alias!='radiusStep') {
             field = "( 3959 * acos( cos( radians("+lat+") )" +
                "* cos( radians( t."+fieldLat+" ) )" +
                "* cos( radians( t."+fieldLng+" )" +
                "- radians("+lng+") )" +
                "+ sin( radians("+lat+") )" +
                "* sin( radians( t."+fieldLat+" ) )" +
                ")" +
                ") AS "+alias;
        } else {
             field = "( 3959 * acos( cos( radians("+lat+") )" +
                "* cos( radians( SUBSTRING_INDEX( meta_v, ',', 1) ) )" +
                "* cos( radians(  SUBSTRING_INDEX( meta_v, ',', -1) )" +
                "- radians("+lng+") )" +
                "+ sin( radians("+lat+") )" +
                "* sin( radians( SUBSTRING_INDEX( meta_v, ',', 1) ) )" +
                ")" +
                ") AS "+alias;
        }

        trips.setFiled(field);

        trips.setHaving(alias+'<10','and');
    }
}