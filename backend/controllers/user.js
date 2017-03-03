/**
 * Created by taras on 01.03.17.
 */
var winston = require('winston');
var express = require('express');
var fs = require('fs');
var users = require('../models/user');
module.exports.controller = function(app) {

    app.get('/get', function(req, res) {
        var id = req.query.id;
        users.getAllByUser(id,function(err,response){
            console.log(response);
        })
    });
}