/**
 * Created by eugene on 24.02.17.
 */

import { handleLocationError } from './handleErrors'
import You from './../../../assets/img/morty.png'

export function getUserLocation(map, google) {
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(function(position) {
            
            let pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            map.setCenter(pos);

            // eslint-disable-next-line
            let yourMarker = new google.maps.Marker({
                position: pos,
                map: map,
                title: 'You are here',
                icon: You,
                draggable: true
            });
            
        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        alert('sorry, geoloacation isn\'t supported')
    }
    
}