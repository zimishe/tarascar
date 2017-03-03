/**
 * Created by taras on 01.03.17.
 */
var winston = require('winston');
var express = require('express');
var fs = require('fs');
var users = require('../models/user');

module.exports.controller = function(app) {

    var bodyParserJson = app.get('bodyParserJson');
    var validate = require('form-validate');
    var validationConfig = {
        //You can configure certain aspects of the validation module
    };
    app.use(validate(app, validationConfig));

    app.get('/get', function(req, res) {
        var id = req.query.id;
        users.getAllByUser(id,function(err,response){
            console.log(response);
        })
    });

    app.post('/sign-up',function(req,res){
        if (!req.body) return res.sendStatus(400);
        var data = req.body;

        req.Validator.validate('name', 'User Name', {
                length: {
                    min: 3,
                    max: 256
                },
                required: true
            })
            .filter('name', {
                trim: true
            })
            .validate('email','e-mail',{
                email:true,
                required: true
            })
            .filter('email', {
                trim: true
            })
            .validate('password', {
                length: {
                    min: 4,
                    max: 64
                }
            })
            .filter('password', {
                stripTags: false,
                escapeHTML: false
            });

        /*
         * Call the "getErrors" method to start the validation
         */
        req.Validator.getErrors(function(errors){
            console.log(errors);
            /*
             * ... Your further rendering logic. e.g. res.render('view', { errors: errors });
             */
        });
    })
}