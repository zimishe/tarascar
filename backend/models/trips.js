/**
 * Created by taras on 16.03.17.
 */
var db = require('../config/db.js');

exports.create = function(data,steps,polylineArr, done) {
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
            polylineArr.forEach(function (val,index,arr) {

                db.get().query('INSERT INTO trip_info (trip_id,meta_k,meta_v) VALUES(?, ?, ?)', [id,'points',arr[index]], function(err, result) {
                    if(err) return done(err)
                    return true;
                });
            })

            steps.forEach(function (val,index,arr) {
                // val.forEach(function (val2,k,latlng) {
                //     var lat = latlng[k][0];
                //     var lng = latlng[k][1];
                //     var ll = lat+','+lng;

                    db.get().query('INSERT INTO trip_info (trip_id,meta_k,meta_v) VALUES(?, ?, ?)', [id,'steps',arr[index]], function(err, result) {
                        if(err) return done(err);
                        return true;
                    });
                // });
            })
        }
        done(null, result.insertId)
    })
}