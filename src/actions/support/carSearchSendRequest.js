/**
 * Created by eugene on 22.03.17.
 */
import store from './../../store/store'
import request from 'request'
import config from './../../config'

export function carSearchSendRequest(dataToSend) {
    // let dataToSend = store.getState().coordsToSearch;
    console.log('dts', dataToSend);
    
    request({
        uri: config.server+'/search',
        method: "post",
        form: dataToSend
    }, function(error, response, body) {
        console.log('b', body);
    });
}