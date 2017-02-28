/**
 * Created by taras on 28.02.17.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    app = express(),
    config = require('./config/config');

app.set('title', 'BlaBla');
app.use(cors());

app.get('/', function(request, response,next){
    response.header('Access-Control-Allow-Origin', "*");
    
    var cars = ["Saab", "Volvo", "BMW"];
    response.json(cars);
    next();
});


app.post('/',function (request,response,next) {
    response.send("here"); 
});


http.createServer(app).listen(config.get('port'),'',function(){
    console.log('Express server listening on port ' + config.get('port'));
});