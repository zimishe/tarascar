/**
 * Created by eugene on 13.03.17.
 */

import { changePlace } from './../changePlace'
import { showRoute } from './../showRoute'

import store from './../../store/store'

import IconFrom from './../../../assets/img/from.png'
import IconTo from './../../../assets/img/to.png'

export function initOfferSearchFields(map) {
    let google = window.google;

    let fromField = document.getElementById('offer__from'),
        toField = document.getElementById('offer__to'),
        wayPt = document.getElementsByClassName('waypoint')[0],
        offerFrom = new google.maps.places.SearchBox(fromField),
        offerTo = new google.maps.places.SearchBox(toField),
        searchWayPt = new google.maps.places.SearchBox(wayPt),
        markers = [];

    google.maps.event.addListener(offerFrom, 'places_changed', function() {
        let geocoder = new google.maps.Geocoder(),
            address = fromField.value;

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

    google.maps.event.addListener(offerTo, 'places_changed', function() {
        let geocoder = new google.maps.Geocoder(),
            address = toField.value;

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
}
