/**
 * Created by eugene on 24.02.17.
 */

import Icon from './../../assets/img/beer.png'
// eslint-disable-next-line
import store from './../store/store'
// eslint-disable-next-line
import { changePlace } from './changePlace'
import { dragMarker } from './support/markerDrag'

export function showPlaces(map, google, pos, yourMarker) {
    let service,
        goal = new google.maps.LatLng(pos.lat,pos.lng),
        infowindow = new google.maps.InfoWindow({
            maxWidth : 300
        }),
        markersArr = [];
    
    const request = {
        location: goal,
        radius: '2000',
        types: ['bar']
    };
    
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            map.setCenter(goal);
            
            for (let i = 0; i < results.length; i++) {
                let place = results[i],
                    rate;

                let marker = new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name,
                    icon: Icon
                });

                markersArr.push(marker);

                place.rating !== undefined ? rate = place.rating : rate = 'недоступно';

                let content =
                    '<div class="place">' +
                    '<div class="place__header">'+
                    '<h3>'+place.name+'</h3>'+
                    '<h4>Рейтинг: '+rate+'</h4>'+
                    '</div>'+
                    '<p>'+place.vicinity+'</p>'+
                    '</div>';

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(content);
                    infowindow.open(map, this);
                });
            }

            markersArr.push(yourMarker);
            // store.dispatch(changePlace(markersArr));
            // yourMarker.setMap(map);
        }
        
        dragMarker(map, google, yourMarker);
    }
}



