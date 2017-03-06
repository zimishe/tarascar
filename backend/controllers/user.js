/**
 * Created by taras on 01.03.17.
 */
var winston = require('winston');
var express = require('express');
var fs = require('fs');
var users = require('../models/user');
var expressValidator = require('express-validator');
var md5 = require('js-md5');


module.exports.controller = function(app) {
    app.use(expressValidator());

    var bodyParserJson = app.get('bodyParserJson');


    app.get('/get', function(req, res) {
        var id = req.query.id;
        users.getAllByUser(id,function(err,response){
            console.log(response);
        })
    });

    app.post('/sign-up',function(req,res){
        if (!req.body) return res.sendStatus(400);
        var errors = [{}];
        var data = req.body;
        var s = 0;
        req.checkBody("name", "Enter a name.").notEmpty();
        req.checkBody("surname", "Enter a surname.").notEmpty();
        req.checkBody("surname", "Enter a surname.").notEmpty();
        req.checkBody("password", "Invalid Password.").isLength({
            options: [{ min: 2, max: 10 }],
            errorMessage: 'Must be between 2 and 10 chars long'
        }).notEmpty();
        req.checkBody("repeat_password", "Invalid Confirm Password.").isLength({
            options: [{ min: 2, max: 10 }],
            errorMessage: 'Must be between 2 and 10 chars long'
        }).notEmpty();
        req.checkBody("email", "Enter a valid email address.").isEmail();

        errors = req.validationErrors();
        if (errors) {
            res.json({ errors: errors });
            return false;
        } else {
            errors = [];
            if(data.password!=data.repeat_password) {
                errors.push({param:'repeat_password',msg:'confirm password is incorect'});
            }

           users.getIdByEmail(data.email,function(e,id){
                if(e != null) {
                    console.log(e);
                } else {
                    if(id>0) {
                        console.log(id);
                        errors.push({param:'email',msg:'email is unique'});
                        console.log(errors);
                    }
                }
            });

                if(errors.length > 0) {
                    res.json({ errors: errors });
                    return false;
                }  else {
                    s = 1;
                    data.password = md5(data.password);
                    users.create(data,function(err,response){
                        if(err != null) {
                            console.log(err,"error");
                        } else {
                            s = response;
                            console.log(response,"success");
                        }
                    });
                }

            res.json({s:s,errors:errors});


            // normal processing here
        }
    })
}