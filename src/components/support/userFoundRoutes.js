/**
 * Created by eugene on 24.03.17.
 */
import React, { Component } from 'react'
import store from './../../store/store'
import { connect } from 'react-redux'
// eslint-disable-next-line 
import { setRoutes } from './../../actions/setRoutes'

import FoundRoute from './foundRoute'

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        chooseRoute: (routeID, route, event) => {
            let map = window.map;

            if (route.length > 0) {
                route.forEach((el) => {
                    el.polylines.forEach(polyline => polyline.setMap(null));
                });
                
                route[routeID].polylines.forEach(polyline => {
                    polyline.setMap(map)
                })
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

class UserFoundRoutes extends Component {
    render() {
        let foundRoutes = this.props.data.foundRoutes;
        
        return (
            <div className="routes-list">
                <h2>За даним запитом знайдені такі поїздки:</h2>
                
                <div className="single-routes">
                    {
                        foundRoutes.map((el, i) =>
                            <FoundRoute 
                                key={i}
                                id={i}
                                driverID={el.owner_id}
                                routeID={el.id}
                                carID={el.cars_id}
                                from={el.start_name}
                                to={el.end_name}
                                startDate={new Date(el.date_start)}
                                duration={el.duration}
                                price={el.price}
                                seats={el.quantity}
                                routeColor={el.pathColor}
                                foundRoutes={foundRoutes}
                                chooseRoute={this.props.chooseRoute}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserFoundRoutes)