/**
 * Created by eugene on 28.02.17.
 */

import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'
import { fromToCoords } from './../actions/support/fromToCoords'
import UserFoundRoutes from './support/userFoundRoutes'
import config from './../config'

const mapStateToProps = function() {
    let data = store.getState();
    return {
        data : data
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        carSearchHandler: (event) => {
            event.preventDefault();
        }
    };
};

class SearchCar extends Component {
    componentDidMount() {
        let map = window.map,
            google = window.google;

        if ((map !== null) && (google !== undefined)) {
            fromToCoords(map);
        }
    }
    
    render() {
        let SearchAction = config.server+'/search',
            foundRoutes = store.getState().foundRoutes;
        
        function checkRoutes() {
            if (foundRoutes !== '') {
                return <UserFoundRoutes />
            }
        }
        
        return (
            <form action={SearchAction} method="post" onSubmit={this.props.carSearchHandler.bind(this)} className="car__search">
                <h2>Пошук авто поруч з вами</h2>
                <div className="car__search__inputs">
                    <input type="text" id="from" name="data[from]" placeholder="від" required />
                    <input type="text" id="to" name="data[to]" placeholder="до" required />
                    <button className="car__search__submit">Пошук</button>
                </div>
                {checkRoutes()}
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchCar)

