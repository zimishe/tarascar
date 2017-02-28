/**
 * Created by eugene on 24.02.17.
 */
import { getUserLocation } from './../actions/support/getUserLocation'
import { fromToCoords } from './../actions/support/fromToCoords'
// eslint-disable-next-line
import { showPlaces } from './showPlaces'
import Icon from './../../assets/img/morty.png'

export function initMap() {
    let map,
        google = window.google,
        markers = [];

    map = new google.maps.Map(this.refs.map, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 12
    });

    let input = document.getElementById('search'),
        searchBox = new google.maps.places.SearchBox(input);

    google.maps.event.addListener(searchBox, 'places_changed', function() {
        let geocoder = new google.maps.Geocoder(),
            address = input.value;

        geocoder.geocode({ 'address': address }, function (results, status) {

            if (status === google.maps.GeocoderStatus.OK) {
                let latitude = results[0].geometry.location.lat(),
                    longitude = results[0].geometry.location.lng();

                let coords = {
                    lat: latitude,
                    lng : longitude
                };
                
                // eslint-disable-next-line
                let yourMarker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    title: 'You are here',
                    icon: Icon,
                    animation: google.maps.Animation.DROP,
                    draggable: true
                });
                
                map.setCenter(coords);
            }
        });
    });
    //  ==========
    
    fromToCoords(map);
    getUserLocation(map, google, markers);
}
