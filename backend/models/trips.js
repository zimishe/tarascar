/**
 * Created by taras on 16.03.17.
 */
var db = require('../config/db.js');

exports.create = function(data, done) {
    var values = [];

    db.get().query('INSERT INTO trips (name, surname, email, password) VALUES(?, ?, ?, ?)', values, function(err, result) {
        if (err) return done(err);
        done(null, result.insertId)
    })
}