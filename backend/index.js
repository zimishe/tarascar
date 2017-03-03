/**
 * Created by taras on 28.02.17.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    app = express(),
    bodyParser = require('body-parser'),
    config = require('./config/config'),
    winston = require('winston'),
    session = require('express-session'),
    fs = require('fs'),
    connection = require('./config/connection');

app.set('title', 'BlaBla');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.use(express.session());
//app.use(app.router);

fs.readdirSync('./backend/controllers').forEach(function (file) {
    if(file.substr(-3) == '.js') {
        route = require('./controllers/' + file);
        route.controller(app);
    }
});


http.createServer(app).listen(config.get('port'),'',function(){
    console.log('Express server listening on port ' + config.get('port'));
});