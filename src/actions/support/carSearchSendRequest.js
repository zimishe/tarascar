/**
 * Created by eugene on 22.03.17.
 */
import request from 'request'
import config from './../../config'
import { userShowAvailableRoutes } from './userShowAvailableRoutes'

export function carSearchSendRequest(dataToSend) {
    request({
        uri: config.server+'/search',
        method: "post",
        form: dataToSend.coords
    }, function(error, response, body) {
        let receivedData = JSON.parse(body),
            status = receivedData.s;
        
        if (status === 1) {
            userShowAvailableRoutes(receivedData);
        }
    });
}
