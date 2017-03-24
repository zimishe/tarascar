/**
 * Created by taras on 16.03.17.
 */
var db = require('../config/db.js');

exports.create = function(data,steps,polylines, done) {
    var keys = Object.keys(data);
    keys = keys.join();
    var values = Object.keys(data).map(function(key) {
        return data[key];
    });
    //console.log(data,keys,'INSERT INTO trip ('+keys+') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    db.get().query('INSERT INTO trip ('+keys+') VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', values, function(err, result) {
        if (err) return done(err);
        var id = result.insertId;
        if(id>0) {
            polylines.forEach(function (val,index,arr) {
                db.get().query('INSERT INTO trip_info (trip_id,meta_k,meta_v) VALUES(?, ?, ?)', [id,'polylines',arr[index]], function(err, result) {
                    if(err) return done(err);
                    return true;
                });
            })

            steps.forEach(function (val,index,arr) {
                var lat = arr[index]['lat'];
                var lng= arr[index]['lng'];
                var step = lat+','+lng;
                db.get().query('INSERT INTO trip_info (trip_id,meta_k,meta_v) VALUES(?, ?, ?)', [id,'steps',step], function(err, result) {
                    if(err) return done(err);
                    return true;
                });
            })
        }
        done(null, result.insertId)
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


exports.radiusStart = '';
exports.radiusEnd = '';
exports.get = function(done) {
    var join = this.getJoin();
    var filed = ','+this.getField();
    var having = this.getHaving();
    var where = this.getWhere();

    var sql = "Select * from (Select distinct t.* "+filed+" from trip as t " +
        "join trip_info as i on i.trip_id = t.id "+where+""+having+" "+
        //"union all " +
        //"Select distinct t.* "+filed+" from trip as t " +
        //"join trip_info as i on i.trip_id = t.id and meta_k='steps' "+where+" having   (radiusStart <10 || radiusStepS<10)  and (radiusEnd<10  || radiusStepE<10) " +
        ") as trips " +
        "group by id";
    // console.log(sql); return false;
    db.get().query(sql,function(err,result) {
        if (err) return done(err);
        if(!result.length) return done(err,[]);
        function getInfo(item, callback) {
            db.get().query("select meta_v from trip_info where trip_id="+item.id+" and meta_k='polylines'",function(err,step){
                if(err)  return callback(err);
                callback(null,step);
            });
        }

        var flg = false;
        var promise = new Promise(function (resolve, reject) {
            result.forEach(function(item,i,arr){
                getInfo(item, function(err,step){
                    if (err != null) {
                        console.log(err);
                    } else {
                        item.steps = step;
                        flg = true;
                        //console.log(item,'-',i);
                        //result.splice(i,'steps',step);
                    }
                    if(i == arr.length-1 && flg) resolve(result);
                })
                //console.log(arr.length-1,'s',i);
            });

        });

        //--------------------
        //var flg = false;
        //result.forEach(function(item,i,arr){
        //    getInfo(item, function(err,step){
        //        if (err != null) {
        //            console.log(err);
        //        } else {
        //            item.steps = step;
        //            flg = true;
        //            //console.log(item,'-',i);
        //            //result.splice(i,'steps',step);
        //        }
        //        if(i == arr.length-1 && flg){
        //            console.log(result);
        //            done(null,result);
        //        }
        //    })
        //    //console.log(arr.length-1,'s',i);
        //});
        //------------



        promise.then(function (result) {
            //console.log(result);
            done(null,result);
        });
    });
    //console.log(sql);
}



