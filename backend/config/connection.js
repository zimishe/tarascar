/**
 * Created by taras on 13.07.16.
 */
var config      = require('./config');
var db      = require('./db');

var winston = require('winston');

var mysql      = require('mysql');
db.connect(db.MODE_PRODUCTION, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {
        console.log('Listening on port 3000...')
    }
})
