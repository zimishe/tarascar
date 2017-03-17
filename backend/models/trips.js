/**
 * Created by taras on 16.03.17.
 */
var db = require('../config/db.js');

exports.create = function(data,steps, done) {
    var keys = Object.keys(data);
    keys = keys.join();
    db.get().query('INSERT INTO trip ('+keys+') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data, function(err, result) {
        if (err) return done(err);
        done(null, result.insertId)
    })
}