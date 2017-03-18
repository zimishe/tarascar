/**
 * Created by taras on 01.03.17.
 */
var winston = require('winston');
var express = require('express');
var fs = require('fs');
var users = require('../models/user');
var expressValidator = require('express-validator');
var md5 = require('js-md5');
mailer = require('express-mailer');


module.exports.controller = function (app) {
    app.use(expressValidator());

    var bodyParserJson = app.get('bodyParserJson');


    app.get('/get', function (req, res) {
        var id = req.query.id;

    });

    app.post('/sign-in', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        var errors = [{}];
        var data = req.body;
        var s = 0;

        req.checkBody("email", "Enter a valid email address.").isEmail();
        req.checkBody("password", "Invalid Password.").isLength({
            options: [{min: 2, max: 10}],
            errorMessage: 'Must be between 2 and 10 chars long'
        }).notEmpty();

        errors = req.validationErrors();

        if (errors) {
            res.json({s: s, errors: errors});
            return false;
        } else {
            var promise = new Promise(function (resolve, reject) {
                users.getAllByEmail(data.email, function (e, result) {
                    if (e != null) {
                        console.log(e);
                    } else {
                        resolve(result);
                    }
                });
            });

            promise.then(function (result) {
                errors = [];
                if(result) {
                    data.password = md5(data.password);
                    if(result.password!=data.password) {
                        console.log(result.password,data.password,"here");
                        errors.push({param: 'password', msg: 'confirm password is incorect'});
                    }
                } else {
                    errors.push({param: 'email', msg: 'Data is incorect'});
                }
                if(!errors.length) {
                    s = 1;
                    delete result.password;
                    login(req,result,res,function(){
                       console.log("ok");
                    });
                }

                res.json({s: s, errors: errors,user:result});
                return res.sendStatus(200);
            })
        }
    });

        app.post('/sign-up', function (req, res) {
        if (!req.body) return res.sendStatus(400);
        var errors = [{}];
        var data = req.body;
        var s = 0;
        req.checkBody("name", "Enter a name.").notEmpty();
        req.checkBody("surname", "Enter a surname.").notEmpty();
        req.checkBody("surname", "Enter a surname.").notEmpty();
        req.checkBody("password", "Invalid Password.").isLength({
            options: [{min: 2, max: 10}],
            errorMessage: 'Must be between 2 and 10 chars long'
        }).notEmpty();
        req.checkBody("repeat_password", "Invalid Confirm Password.").isLength({
            options: [{min: 2, max: 10}],
            errorMessage: 'Must be between 2 and 10 chars long'
        }).notEmpty();
        req.checkBody("email", "Enter a valid email address.").isEmail();

        errors = req.validationErrors();

        if (errors) {
            res.json({s: s, errors: errors});
            return false;
        } else {
            errors = [];
            if (data.password != data.repeat_password) {
                errors.push({param: 'repeat_password', msg: 'confirm password is incorect'});
            }


            var promise = new Promise(function (resolve, reject) {
                users.getAllByEmail(data.email, function (e, id) {
                    if (e != null) {
                        console.log(e);
                    } else {
                        resolve(id);
                    }
                });
            });

            promise.then(function (id) {
                if (typeof id!= "undefined" && id.id > 0) {
                    errors.push({param: 'email', msg: 'email is unique'});
                }

                if (errors.length > 0) {
                    res.json({s: s, errors: errors});
                    return false;
                } else {
                    s = 1;
                    data.password = md5(data.password);
                    users.create(data, function (err, response) {
                        if (err != null) {
                            console.log(err, "error");
                        } else {
                            s = response;
                            login(req,id,res,function(){
                                console.log("user login");
                            });
                            res.json({s: s, errors: errors,user:response});
                            console.log(response, "success");
                        }
                    });

                    // app.mailer.send('email', {
                    //     to: data.email,
                    //     subject: 'Registration Success',
                    //     otherProperty: 'Other Property',
                    //     data: data
                    // }, function (err) {
                    //     if (err) {
                    //         return;
                    //     }
                    //     console.log('Email Sent');
                    // });
                }

                // return res.sendStatus(200);
            });
        }
    })

    var login = function (req, result, res, next) {
        var sess=req.session;
        sess.user = result;
        //console.log(sess);
        next();
    };
}