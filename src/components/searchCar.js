/**
 * Created by eugene on 28.02.17.
 */

import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'
import { fromToCoords } from './../actions/support/fromToCoords'
// eslint-disable-next-line
import request from 'request'
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
            
            let dataToSend = store.getState().coordsToSearch;
            
            request({
                uri: config.server+'/search',
                method: "post",
                form: dataToSend
            }, function(error, response, body) {

            });
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
        let SearchAction = config.server+'/search';
        
        return (
            <form action={SearchAction} method="post" onSubmit={this.props.carSearchHandler.bind(this)} className="car__search">
                <h2>Пошук авто поруч з вами</h2>
                <div className="car__search__inputs">
                    <input type="text" id="from" name="data[from]" placeholder="від" required />
                    <input type="text" id="to" name="data[to]" placeholder="до" required />   
                    <h3>Вкажіть проміжні точки маршруту</h3>
                    <input type="text" className="waypoint" placeholder="проміжна точка" />
                    <input type="text" className="waypoint" placeholder="проміжна точка" />
                    <button className="car__search__submit">Пошук</button>
                </div>
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchCar)

