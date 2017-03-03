/**
 * Created by eugene on 28.02.17.
 */

import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'

import request from 'request'

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
            request({
                uri: "http://localhost:8888/",
                method: "get",
                form: {
                    name: "Bob"
                }
            }, function(error, response, body) {
                console.log(body);
            });
    
            let fromVal = document.querySelector('#from').value;
            
            
            // let request = {
            //     origin: start,
            //     destination: end,
            //     travelMode: 'DRIVING'
            // };
            // directionsService.route(request, function(result, status) {
            //     if (status == 'OK') {
            //         directionsDisplay.setDirections(result);
            //     }
            // });
        }
    };
};

class SearchCar extends Component {
    render() {
        return (
            <form action="" className="car__search">
                <h2>Пошук авто поруч з вами</h2>
                <div className="car__search__inputs">
                    <input type="text" id="from" name="data[from]" placeholder="від" />
                    <input type="text" id="to" name="data[to]" placeholder="до" />    
                    <button className="car__search__submit" onClick={this.props.carSearchHandler.bind(this)}>Пошук</button>
                </div>
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchCar)

