/**
 * Created by taras on 03.03.17.
 */
import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'
import serialize from 'form-serialize'

import request from 'request'
import { validation } from './../actions/validation'


const mapStateToProps = function() {
    let data = store.getState();
    return {
        data : data
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        submitHandler: (event) => {
            event.preventDefault();
            
            let form = document.querySelector('#registration');
            
            let formData = serialize(form,
                { 
                    hash: true 
                });

            request({
                uri: "http://localhost:8888/sign-up",
                method: "post",
                form: formData
            }, function(error, response, body) {
                validation(JSON.parse(body));
            });
        }
    };
};

class Test extends Component{
    render() {
        return (
            <form action="http://localhost:8888/sign-up" method="post" className="car__search" id="registration">
                <h2>Regis</h2>
                <div className="car__search__inputs" id="reg_inputs">
                    <input type="text" name="name" className="waypoint" placeholder="Name" />
                    <input type="text" name="surname" className="waypoint" placeholder="Surname" />
                    <input type="text" name="email" className="waypoint" placeholder="E-mail" />
                    <input type="text" name="password" className="waypoint" placeholder="Password" />
                    <input type="text" name="repeat_password" className="waypoint" placeholder="Password" />
                    <button type="submit" className="car__search__submit" onClick={this.props.submitHandler.bind(this)}>Registration</button>
                </div>
            </form>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)
