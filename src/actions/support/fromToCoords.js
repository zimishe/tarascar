/**
 * Created by eugene on 28.02.17.
 */

import store from './../../store/store'

import { changePlace } from './../changePlace'
import { showRoute } from './../showRoute'

import IconFrom from './../../../assets/img/from.png'
import IconTo from './../../../assets/img/to.png'

export function fromToCoords(map) {
    let google = window.google;

    let placeFrom = document.getElementById('from'),
        placeTo = document.getElementById('to'),
        wayPt = document.getElementsByClassName('waypoint')[0],
        searchFrom = new google.maps.places.SearchBox(placeFrom),
        searchTo = new google.maps.places.SearchBox(placeTo),
        searchWayPt = new google.maps.places.SearchBox(wayPt),
        markers = [];

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

                // eslint-disable-next-line
                let markerFrom = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: 'You are here',
                    icon: IconFrom,
                    animation: google.maps.Animation.DROP,
                    draggable: true
                });

                markers.push(markerFrom);
                store.dispatch(changePlace(markers));
                markerFrom.setMap(map);
                
                map.setCenter(coords);
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

                // eslint-disable-next-line
                let markerTo = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: 'You are here',
                    icon: IconTo,
                    animation: google.maps.Animation.DROP,
                    draggable: true
                });

                markers.push(markerTo);

                map.setCenter(coords);
            }
        });
    });
    
    google.maps.event.addListener(wayPt, 'places_changed', function() {
        let geocoder = new google.maps.Geocoder(),
            address = searchWayPt.value;

        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {
                let latitude = results[0].geometry.location.lat(),
                    longitude = results[0].geometry.location.lng();

                let coords = {
                    lat: latitude,
                    lng : longitude
                };

                // eslint-disable-next-line
                let markerTo = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: 'You are here',
                    icon: IconTo,
                    animation: google.maps.Animation.DROP,
                    draggable: true
                });

                // markers.push(markerTo);

                // map.setCenter(coords);
            }
        });
    });
    
    showRoute(google, map);
}