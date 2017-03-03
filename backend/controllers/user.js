/**
 * Created by taras on 01.03.17.
 */
var winston = require('winston');
var express = require('express');
var fs = require('fs');
var users = require('../models/user');
var expressValidator = require('express-validator');


module.exports.controller = function(app) {
    app.use(expressValidator());

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
        req.checkBody('name', 'Invalid name').notEmpty().isInt();
    })
}