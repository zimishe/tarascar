/**
 * Created by taras on 16.03.17.
 */
var winston = require('winston');
var express = require('express');
var polyline = require('polyline');

var trips = require('../models/trips');
var expressValidator = require('express-validator'),bodyParser = require('body-parser');

mailer = require('express-mailer');

module.exports.controller = function (app) {
    // console.log(polyline.decode('eh{rHg{lyDEd@AJC`@KdDCt@Cl@A`@Cd@A\AZCPARCLEX'));
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
            var polylineArr = [];
            data.steps.forEach(function(val,index,arr){
                polylineArr.push(arr[index].polyline.points);
                steps.push(arr[index].encoded_lat_lngs);
            });
            // console.log(steps);
            var tripData = {
              owner_id:data.userID,
              start_point_lat:data.startCoords.lat,
              start_point_lng:data.startCoords.lng,
              end_point_lat:data.endCoords.lat,
              end_point_lng:data.endCoords.lng,
              quantity:data.formPlacesCount,
              price:data.formPrice,
              date_start:data.startTime,
              date_end:data.endTime,
              start_name:data.startText,
              end_name:data.endText,
              duration:data.durationStamp
            };

            var promise = new Promise(function (resolve, reject) {
                trips.create(tripData,steps,polylineArr, function (e, result) {
                    if (e != null) {
                        console.log(e);
                    } else {
                        resolve(result);
                    }
                });
            });

            promise.then(function (id) {
                console.log(id);
               if(id>0) {
                   s = 1;
               }

                return res.json({s: s, errors: errors});
            });
        }
        //return res.sendStatus(200);

    });
}