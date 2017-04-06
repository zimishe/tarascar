/**
 * Created by eugene on 23.03.17.
 */
const polyline = require('polyline');
import store from './../../store/store'
import { userShowFoundRoutes } from './../userShowFoundRoutes'

export function userShowAvailableRoutes(availableRoutes) {
    let status = availableRoutes.s;
    
    if (status === 1) {
        let routes = availableRoutes.result,
            map = window.map,
            google = window.google,
            colors = ['#2196F3', '#7ec3b9', '#b7ab78', '#d6aaf3', '#66d1e6'],
            storedRoutes = store.getState().foundRoutes;
        
        if (storedRoutes.length > 0) {
            storedRoutes.forEach(storedRoute => {
                storedRoute.polylines.forEach(polyline => polyline.setMap(null))
            })
        }
        
        routes.forEach((route, i) => {
            
            let polylines = route.steps,
                polylinesToSend = [];
            
            if (polylines !== undefined ) {
                polylines.forEach((poly) => {
                    let decoded = polyline.decode(poly.meta_v),
                        path = [];

                    function decodePath() {
                        return new Promise((resolve) => {
                            decoded.forEach((el) => {
                                let stepCoord = {
                                    lat: el[0],
                                    lng: el[1]
                                };

                                path.push(stepCoord);
                            });
                            resolve()
                        })
                    }

                    decodePath().then(() => {
                        let flightPath = new google.maps.Polyline({
                            path: path,
                            geodesic: true,
                            strokeColor: colors[i],
                            strokeOpacity: 1.0,
                            strokeWeight: 3
                        });

                        flightPath.setMap(map);

                        polylinesToSend.push(flightPath);
                    });
                });
            }
            
            route.pathColor = colors[i];
            route.polylines = polylinesToSend;
        });
        
        store.dispatch(userShowFoundRoutes(routes));
    }
}