/**
 * Created by eugene on 16.03.17.
 */

import React, { Component } from 'react'
import store from './../../store/store'
import { connect } from 'react-redux'
// eslint-disable-next-line 
import { setRoutes } from './../../actions/setRoutes'
import SingleRoute from './singleRoute'


const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        createOffer: (event) => {
            event.preventDefault();
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
    
    render() {
        let mapRoutes = this.props.data.routes.offeredRoutes,
            routeFrom = this.props.data.routes.routePoints.start,
            routeTo = this.props.data.routes.routePoints.end;
        
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
