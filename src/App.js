import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store/store'

import UserPanel from './components/userPanel'
import Map from './components/map'
import Sidebar from './components/sidebar'

class App extends Component {
    render() {
        let data = this.props.data.isLogged;
        
        return(
            <div className="gmap-app">
                <UserPanel data={data} />
                <Map />
                <Sidebar />
            </div>
        )
    }
}

const mapStateToProps = function() {
    let data = store.getState();
    return {
        data : data
    }
};

export default connect(
    mapStateToProps
)(App)
