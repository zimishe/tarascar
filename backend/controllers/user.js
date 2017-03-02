/**
 * Created by taras on 01.03.17.
 */
var winston = require('winston');
var express = require('express');
var fs = require('fs');

module.exports.controller = function(app) {


    app.get('/signup', function(req, res) {
        res.send("here");
    });


    app.post('/signUp',function(req,res){
        console.log(req.query);
    });
}