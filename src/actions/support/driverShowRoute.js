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
import { offerSuccess } from './modals/offerSuccess'
import { setFinalRoute } from './../../actions/setFinalRoute'

export function driverShowRoute(google, map) {
    let directionsService = new google.maps.DirectionsService();
    
    let searchForm = document.querySelector('.offer-car__form'),
        colors = ['#2196F3', '#7ec3b9', '#b7ab78', '#d6aaf3', '#66d1e6'],
        dataToSend;

    if (searchForm !== null) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let fromVal = document.querySelector('#offer__from').value,
                toVal = document.querySelector('#offer__to').value;

            if(fromVal !== '' && toVal !== '') {
                
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

                        let offeredRoutes = [], 
                            data = store.getState();
                        
                        if (data.finalRoute === '') {
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
                                    totalDuration: totalDuration,
                                    steps: steps
                                };

                                dataToSend = {
                                    userID: userID,
                                    startCoords: startCoords,
                                    startText: result.request.origin,
                                    endCoords: endCoords,
                                    endText : result.request.destination,
                                    durationStamp: durationStamp
                                };
                                
                                directionsDisplay.addListener('directions_changed', function() {
                                    dataToStorage.steps = directionsDisplay.getDirections().routes[0].legs[0].steps;
                                });

                                offeredRoutes.push(dataToStorage);
                            });
                        }
                        
                        let routesData = {
                            routePoints: routePoints,
                            offeredRoutes: offeredRoutes
                        };

                        dataToSend.formPrice = document.querySelector('#offer__price').value;
                        dataToSend.formPlacesCount = document.querySelector('#offer__places__count').value;
                        dataToSend.startTime = document.querySelector('#offer__start__time').value;
                        dataToSend.endTime = document.querySelector('#offer__end__time').value;
                        
                        store.dispatch(setRoutes(routesData));
                        
                        if (data.finalRoute !== '') {
                            
                            let stepsToSend = [],
                                routeId = data.finalRoute[0].directionDisplay.routeIndex,
                                chosenSteps = data.finalRoute[0].directionDisplay.directions.routes[routeId].legs[0].steps;

                            data.finalRoute[0].steps.forEach((el) => {
                                let stepCoord = {
                                    lat: el.start_point.lat(),
                                    lng: el.start_point.lng()
                                };

                                stepsToSend.push(stepCoord);
                            });

                            dataToSend.steps = stepsToSend;

                            let polylines = [];

                            chosenSteps.forEach((step) => {
                                polylines.push(step.polyline.points)
                            });
                            
                            dataToSend.polylines = polylines;
                            
                            request({
                                uri: config.server+'/trip',
                                method: "post",
                                form: dataToSend
                            }, function(error, response, body) {
                                let status = JSON.parse(body).s;
                                
                                if (status === 1) {
                                    offerSuccess();
                                    searchForm.reset();
                                    
                                    let finalRoute = store.getState().finalRoute[0].directionDisplay,
                                        datePicker = document.querySelector('#offer__start__time');
                                    
                                    store.dispatch(setFinalRoute(''));
                                    
                                    datePicker.value = '';
                                    
                                    finalRoute.setMap(null);
                                }
                            });
                        }
                    }
                });
            }
        });
    }
}