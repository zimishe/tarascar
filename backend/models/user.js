/**
 * Created by taras on 03.03.17.
 */
var db = require('../config/db.js');

var User = function (data) {
    this.data = data;
}

User.prototype.data = {}

exports.create = function(data, done) {
    var values = [data.name, data.surname, data.email, data.password];

    db.get().query('INSERT INTO users (name, surname, email, password) VALUES(?, ?, ?, ?)', values, function(err, result) {
        if (err) return done(err);
        done(null, result.insertId)
    })
}

exports.getAll = function(done) {
    db.get().query('SELECT * FROM users', function (err, rows) {
        if (err) return done(err);
        done(null, rows)
    })
}

exports.getAllByUser = function(userId, done) {
    db.get().query('SELECT * FROM users WHERE id = ?', userId, function (err, rows) {
        if (err) return done(err);
        done(null, rows)
    })
}

exports.getIdByEmail = function(email,done) {
    db.get().query('select id from users where email=? limit 1',email,function(err,rows) {
        if(err) return done(err);
        var id = typeof rows[0] !="undefined"?rows[0].id:0;
        done(null,id);
    })
}