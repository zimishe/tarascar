/**
 * Created by taras on 13.07.16.
 */
var config      = require('./config');

var winston = require('winston');

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : config.get('mysql').host,
    user     : config.get('mysql').user,
    password : config.get('mysql').password,
    database : config.get('mysql').database
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }});

module.exports = connection;
