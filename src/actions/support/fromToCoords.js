/**
 * Created by eugene on 28.02.17.
 */

import store from './../../store/store'
// eslint-disable-next-line
import { changePlace } from './../changePlace'
import { showRoute } from './../showRoute'
import { setPathToSearch } from './../setPathToSearch'
import { carSearchSendRequest } from './../../actions/support/carSearchSendRequest'

import IconFrom from './../../../assets/img/from.png'
import IconTo from './../../../assets/img/to.png'

export function fromToCoords(map) {
    let google = window.google;

    let placeFrom = document.getElementById('from'),
        placeTo = document.getElementById('to'),
        wayPt = document.getElementsByClassName('waypoint')[0],
        markers = {};
        
    if ((placeFrom !== null) && (placeTo !== null)) {
        let searchFrom = new google.maps.places.SearchBox(placeFrom),
            searchTo = new google.maps.places.SearchBox(placeTo),
            coordsToSearch = {};

        const actionCreator = () => (dispatch) => {
            return new Promise(resolve => {
                dispatch(setPathToSearch(coordsToSearch));
                resolve();
            }).then(() => {
                // console.log('2222');
            });
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
                    
                    markers.from = markerFrom;
                    
                    // store.dispatch(changePlace(markers));
                    markerFrom.setMap(map);
                    map.setCenter(coords);
                    
                    coordsToSearch.from = coords;
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
                    
                    markers.to = markerTo;
                    markerTo.setMap(map);
                    
                    map.setCenter(coords);

                    coordsToSearch.to = coords;

                    store.dispatch(actionCreator()).then(() => {
                        carSearchSendRequest(store.getState().coordsToSearch)
                    });
                }
            });
        });
        
        
        
        
        // showRoute(google, map);
    }
}