import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store/store'

import UserPanel from './components/userPanel'
import Map from './components/map'
import Registration from './components/registration'

import { login } from './actions/login'

class App extends Component {
    componentWillMount() {
        let data = JSON.parse(sessionStorage.getItem('userData'));

        if (data !== null) {
            store.dispatch(login(true));
        }
    }
    
    render() {
        let data = this.props.data.isLogged;
        
        return(
            <div className="gmap-app">
                <UserPanel data={data} />
                <Map />
                {this.props.children}
                <Registration />
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
