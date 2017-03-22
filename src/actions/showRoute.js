/**
 * Created by eugene on 03.03.17.
 */
// eslint-disable-next-line
import RoadPoint from './../../assets/img/roadpoint.png'

export function showRoute(google, map) {
    let directionsDisplay,
        directionsService = new google.maps.DirectionsService();
    
    directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
    });

    directionsDisplay.setMap(null);
    
    let searchForm = document.querySelector('.car__search'),
        points = [];
    
    searchForm.addEventListener('submit', (e) => {
       e.preventDefault();

        directionsDisplay.setMap(map);

        let fromVal = document.querySelector('#from').value,
            toVal = document.querySelector('#to').value;

        if(fromVal !== '' && toVal !== '' && points.length < 2) {
            let pointsArray = document.getElementsByClassName('waypoint');

            for (let i = 0; i < pointsArray.length; i++) {
                if (pointsArray.value !== '') {
                    points.push({
                        location: pointsArray[i].value,
                        stopover: true
                    });
                }
            }
        }
        
        if (points.length > 0) {
            
            let request = {
                origin: fromVal,
                destination: toVal,
                travelMode: 'DRIVING',
                provideRouteAlternatives: true
            };

            directionsService.route(request, function(result, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(result);

                    // let route = result.routes[0].legs[0],
                    //     markersArr = [];
                    //
                    // for (let i = 0, length = route.steps.length; i < length; i++) {
                    //     let marker_detail = new google.maps.Marker({
                    //         position: route.steps[i].start_point,
                    //         map: map,
                    //         icon: RoadPoint
                    //     });
                    //
                    //     markersArr.push(marker_detail);
                    // }
                }
            });
        }
    });
}