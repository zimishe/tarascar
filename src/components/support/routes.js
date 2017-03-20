/**
 * Created by eugene on 16.03.17.
 */

import React, { Component } from 'react'
import store from './../../store/store'
import { connect } from 'react-redux'
// eslint-disable-next-line 
import { setRoutes } from './../../actions/setRoutes'
import SingleRoute from './singleRoute'
import { setFinalRoute } from './../../actions/setFinalRoute'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        chooseRoute: (routeID, route) => {
            let offeredRoutes = route.offeredRoutes,
                map = window.map;

            if (offeredRoutes.length > 0) {
                offeredRoutes.forEach((el) => {
                    el.directionDisplay.setMap(null)
                });
                
                let chosen = offeredRoutes.filter((el, i) => i === routeID );
                
                // console.log('ccc', chosen);
                
                store.dispatch(setFinalRoute(chosen));
                
                offeredRoutes[routeID].directionDisplay.setMap(map);
            }
        },
    };
};

const mapStateToProps = function() {
    let data = store.getState();

    return {
        data : data
    }
};

class MapRoutes extends Component {
    componentDidMount() {
       
    }
    
    render() {
        let mapRoutes = this.props.data.routes.offeredRoutes,
            routeFrom = this.props.data.routes.routePoints.start,
            routeTo = this.props.data.routes.routePoints.end,
            routes = this.props.data.routes;
        
        return (
            <div className="routes-list">
                <div className="routes-list__from">
                    <h3>З:</h3>
                    <p>{routeFrom}</p>
                </div>
                <div className="routes-list__to">
                    <h3>до:</h3>
                    <p>{routeTo}</p>
                </div>
                {mapRoutes.map((el, i) => 
                    <SingleRoute 
                        key={i} 
                        totalDistance={el.totalDistance}
                        totalDuration={el.totalDuration}
                        routeId={el.routeId}
                        routeColor={el.routeColor}
                        routes={routes}
                        chooseRoute={this.props.chooseRoute}
                    />
                )}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapRoutes)
