/**
 * Created by eugene on 28.02.17.
 */

import store from './../../store/store'
import { userShowFoundRoutes } from './../userShowFoundRoutes'
import { setPathToSearch } from './../setPathToSearch'
import { carSearchSendRequest } from './../../actions/support/carSearchSendRequest'

import IconFrom from './../../../assets/img/from.png'
import IconTo from './../../../assets/img/to.png'

export function fromToCoords(map) {
    let google = window.google;

    let placeFrom = document.getElementById('from'),
        placeTo = document.getElementById('to'),
        markers = {};
        
    if ((placeFrom !== null) && (placeTo !== null)) {
        let searchFrom = new google.maps.places.SearchBox(placeFrom),
            searchTo = new google.maps.places.SearchBox(placeTo),
            coordsToSearch = {
                coords : {},
                markers : {}
            };
        
        store.dispatch(userShowFoundRoutes(''));

        const actionCreator = () => (dispatch) => {
            return new Promise(resolve => {
                dispatch(setPathToSearch(coordsToSearch));
                resolve();
            })
        };

        google.maps.event.addListener(searchFrom, 'places_changed', function() {
            let geocoder = new google.maps.Geocoder(),
                address = placeFrom.value;
            
            geocoder.geocode({ 'address': address }, function (results, status) {
                
                if (status === google.maps.GeocoderStatus.OK) {
                    let latitude = results[0].geometry.location.lat(),
                        longitude = results[0].geometry.location.lng();

                    let coords = {
                        lat: latitude,
                        lng : longitude
                    };
                    
                    (markers.from !== undefined) && markers.from.setMap(null);
                    
                    // eslint-disable-next-line
                    let markerFrom = new google.maps.Marker({
                        position: coords,
                        map: map,
                        title: 'You are here',
                        icon: IconFrom,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    });
                    
                    (coordsToSearch.markers.from !== undefined) && coordsToSearch.markers.from.setMap(null);
                    
                    markerFrom.setMap(map);
                    map.setCenter(coords);
                    
                    coordsToSearch.coords.from = coords;
                    coordsToSearch.markers.from = markerFrom;
                    
                    if (placeTo.value !== '') {
                        store.dispatch(actionCreator()).then(() => {
                            carSearchSendRequest(store.getState().coordsToSearch)
                        });
                    }
                }
            });
        });

        google.maps.event.addListener(searchTo, 'places_changed', function() {
            let geocoder = new google.maps.Geocoder(),
                address = placeTo.value;

            geocoder.geocode({ 'address': address }, function (results, status) {

                if (status === google.maps.GeocoderStatus.OK) {
                    let latitude = results[0].geometry.location.lat(),
                        longitude = results[0].geometry.location.lng();

                    let coords = {
                        lat: latitude,
                        lng : longitude
                    };

                    (markers.to !== undefined) && markers.to.setMap(null);
                    
                    // eslint-disable-next-line
                    let markerTo = new google.maps.Marker({
                        position: coords,
                        map: map,
                        title: 'You are here',
                        icon: IconTo,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    });
                    
                    (coordsToSearch.markers.to !== undefined) && coordsToSearch.markers.to.setMap(null);
                    
                    markerTo.setMap(map);
                    
                    map.setCenter(coords);

                    coordsToSearch.coords.to = coords;
                    coordsToSearch.markers.to = markerTo;

                    store.dispatch(actionCreator()).then(() => {
                        carSearchSendRequest(store.getState().coordsToSearch)
                    });
                }
            });
        });
    }
}