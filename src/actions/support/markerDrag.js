/**
 * Created by eugene on 27.02.17.
 */
import { showPlaces } from './../showPlaces'

export function dragMarker(map, google, YourMarker) {
    google.maps.event.addListener(YourMarker, 'dragend', function(event){
        
        let lat = event.latLng.lat(),
            lng = event.latLng.lng();

        let coords = {
            lat: lat,
            lng : lng
        };

        showPlaces(map, google, coords, YourMarker);

        map.setCenter(coords);
    });
}


