/**
 * Created by eugene on 16.03.17.
 */
/**
 * Created by eugene on 03.03.17.
 */
import store from './../../store/store'
import { setRoutes } from './../../actions/setRoutes'
import request from 'request'
import config from './../../config'

export function driverShowRoute(google, map) {
    let directionsService = new google.maps.DirectionsService();
    
    let searchForm = document.querySelector('.offer-car__form'),
        points = [],
        colors = ['#2196F3', '#7ec3b9', '#b7ab78', '#d6aaf3', '#66d1e6'],
        dataToSend;

    if (searchForm !== null) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let fromVal = document.querySelector('#offer__from').value,
                toVal = document.querySelector('#offer__to').value;

            if(fromVal !== '' && toVal !== '' && points.length < 2) {
                // let pointsArray = document.getElementsByClassName('waypoint');
                //
                // for (let i = 0; i < pointsArray.length; i++) {
                //     if (pointsArray.value !== '') {
                //         points.push({
                //             location: pointsArray[i].value,
                //             stopover: true
                //         });
                //     }
                // }

                let directionsRequest = {
                    origin: fromVal,
                    destination: toVal,
                    travelMode: 'DRIVING',
                    provideRouteAlternatives: true
                };

                directionsService.route(directionsRequest, function(result, status) {
                    if (status === 'OK') {

                        let routePoints = {
                            start: result.request.origin,
                            end : result.request.destination
                        };

                        let offeredRoutes = [];

                        result.routes.forEach((route, i) => {
                            let directionsDisplay = new google.maps.DirectionsRenderer({
                                map: map,
                                suppressMarkers: true,
                                directions: result,
                                draggable: true,
                                routeIndex: i,
                                polylineOptions: {
                                    strokeColor: colors[i]
                                }
                            });

                            // console.log('rr', route);

                            let legs = route.legs,
                                steps = route.legs[0].steps,
                                startCoords = {lat:route.legs[0].start_location.lat(),lng:route.legs[0].start_location.lng()},
                                endCoords = {lat:route.legs[0].end_location.lat(),lng:route.legs[0].end_location.lng()},
                                totalDistance = legs[0].distance.text,
                                totalDuration = legs[0].duration.text,
                                durationStamp = legs[0].duration.value,
                                userID = JSON.parse(sessionStorage.getItem('userData')).id;

                            let dataToStorage = {
                                directionDisplay: directionsDisplay,
                                routeId: directionsDisplay.routeIndex,
                                routeColor: directionsDisplay.polylineOptions.strokeColor,
                                totalDistance: totalDistance,
                                totalDuration: totalDuration
                            };

                            dataToSend = {
                                userID: userID,
                                startCoords: startCoords,
                                startText: result.request.origin,
                                endCoords: endCoords,
                                endText : result.request.destination,
                                steps: steps,
                                durationStamp: durationStamp
                            };
                            
                            offeredRoutes.push(dataToStorage);
                        });

                        let routesData = {
                            routePoints: routePoints,
                            offeredRoutes: offeredRoutes
                        };

                        console.log('oR', routesData);

                        dataToSend.formPrice = document.querySelector('#offer__price').value;
                        dataToSend.formPlacesCount = document.querySelector('#offer__places__count').value;
                        dataToSend.startTime = document.querySelector('#offer__start__time').value;
                        dataToSend.endTime = document.querySelector('#offer__end__time').value;

                        store.dispatch(setRoutes(routesData));

                        // console.log('rdata', routesData);

                        // request({
                        //     uri: config.server+'/trip',
                        //     method: "post",
                        //     form: dataToSend
                        // }, function(error, response, body) {
                        //     console.log('r', response);
                        // });
                    }
                    
                    
                });
            }
        });
    }
}