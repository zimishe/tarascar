/**
 * Created by taras on 16.03.17.
 */
var db = require('../config/db.js');

exports.create = function(data,steps,polylines, done) {

}

exports.getTripInfoId = function (trip_id,done) {
    let field = ','+this.getField();
    let having = this.getHaving();
    // console.log(having);
    let query = 'Select i.* '+field+' from trip_info i where trip_id='+trip_id+'' +
        ' and meta_k="steps" '+having+' limit 1';
    db.get().query(query,function(err,result) {
       if (err) return done(err);

    });
}

var joinA = [];

exports.setJoin = function(join) {
    joinA.push(join);
}

exports.getJoin = function() {
    var o;
    if(joinA.length){
        o = joinA.join(' \n');
    }
    return o;
}

var fields = [];

exports.setFiled = function(field) {
    fields.push(field);
}


exports.getField = function() {
    var o;
    if(fields.length){
        o = fields.join(',\n');
    }
    fields = [];
    return o;
}

var having = [];

exports.setHaving = function(w,prefix){
    prefix = having.length?prefix:'having ';
    having.push(' '+ prefix + ' '+ w);
}

exports.getHaving = function()
{
    var o;
    if(having.length) {
       o = having.join(' ');
    }
    having = [];
    return o;
}

var whereA = [];
exports.setWhere = function(w,prefix) {
    prefix = whereA.length?prefix:'where ';
    whereA.push(' '+ prefix + ' '+ w);
}

exports.getWhere = function()
{
    var o;
    if(whereA.length) {
        o = whereA.join(' ');
    }
    whereA = [];
    return o;
}



