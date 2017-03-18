/**
 * Created by eugene on 22.02.17.
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import { connect } from 'react-redux'
import store from './../store/store'

import { initMap } from './../actions/initMap'
import { loadJS } from './../actions/support/loadJS'
import { changePlace } from './../actions/changePlace'


const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        onClick: (event) => {
            dispatch(changePlace(event))
        }
    };
};

const mapStateToProps = function() {
    let data = store.getState();

    return {
        data : data
    }
};

class Map extends Component {
    componentDidMount() {
        // Connect the initMap() function within this class to the global window context,
        // so Google Maps can invoke it
        window.initMap = initMap.bind(this);
        
        // Asynchronously load the Google Maps script, passing in the callback reference
        
        if (window.google === undefined) {
            loadJS('https://maps.google.com/maps/api/js?key=AIzaSyDRUCOhK3QDvocwOtZMG4_Eyaw6dBbm95A&libraries=places&callback=initMap')    
        }   else {
            window.initMap()
        }
    }
    
    componentWillUpdate() {
        let markers = this.props.data.markers;
        
        function setMapOnAll(map) {
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
        }
        
        if(markers !== '') {
            setMapOnAll(null);
        }   
    }
    
    render() {
        
        return (
            <div className="gmap__map" id="map" ref="map"></div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map)

