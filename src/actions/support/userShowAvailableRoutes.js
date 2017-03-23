/**
 * Created by eugene on 23.03.17.
 */

export function userShowAvailableRoutes(availableRoutes) {
    let status = availableRoutes.s;
    
    if (status === 1) {
        let routes = availableRoutes.result,
            map = window.map,
            google = window.google;

        routes.forEach((route, i) => {
            let steps = route.steps,
                path = [];
            
            console.log('r', route);

            steps.forEach((el) => {
                let coord = el.meta_v,
                    breaker = coord.indexOf(',');
                
                let stepCoord = {
                    lat: parseFloat(coord.substring(0, breaker)),
                    lng: parseFloat(coord.substring(breaker + 1, coord.length))
                };
                
                path.push(stepCoord);
            });
            
            let flightPath = new google.maps.Polyline({
                path: path,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
            flightPath.setMap(map);
            
        });
    }
}