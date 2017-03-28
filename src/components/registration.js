/**
 * Created by taras on 03.03.17.
 */
import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'
import serialize from 'form-serialize'

import request from 'request'
import { validation } from './../actions/validation'
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
        register: (event) => {
            event.preventDefault();
            
            let form = document.querySelector('#registration');
            
            let formData = serialize(form,
                { 
                    hash: true 
                });

            request({
                uri: config.server+'/sign-up',
                method: "post",
                form: formData
            }, function(error, response, body) {
                validation(JSON.parse(body));
            });
        },
        login: (event) => {
            event.preventDefault();
            
            let form = document.querySelector('#login');
            
            let formData = serialize(form,
                { 
                    hash: true 
                });

            request({
                uri: config.server+'/sign-in',
                method: "post",
                form: formData
            }, function(error, response, body) {
                validation(JSON.parse(body));
            });
        },
        
        toggleForms: (e) => {
            let loginForm = document.querySelector('#login'),       
                registerForm = document.querySelector('#registration');       
            
            if (loginForm.classList.contains('active')) {
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
            }   else {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            }
        }
    };
};

class RegModals extends Component{
    render() {
        let registerAction = config.server+'/sign-up',
            loginAction = config.server+'/sign-in';
        
        return (
            <div className="forms-modal">
                <a className="close-reg-modal">x</a>
                <form action={loginAction} method="post" className="car__search active" id="login">
                    <h2>Login</h2>
                    <div className="car__search__inputs reg_inputs">
                        <input type="email" name="email" className="waypoint" placeholder="E-mail" />
                        <input type="password" name="password" className="waypoint" placeholder="Password" />
                        <button type="submit" className="car__search__submit" onClick={this.props.login.bind(this)}>Login</button>
                    </div>
                    <div className="bottom__info">
                        <p>
                            Don't have an account? Please <a className="toggle-register" 
                                onClick={
                                    this.props.toggleForms
                                }>
                            register</a>
                        </p>
                    </div>
                </form>
                <form action={registerAction} method="post" className="car__search" id="registration">
                    <h2>Registration</h2>
                    <div className="car__search__inputs reg_inputs">
                        <input type="text" name="name" className="waypoint" placeholder="Name" />
                        <input type="text" name="surname" className="waypoint" placeholder="Surname" />
                        <input type="email" name="email" className="waypoint" placeholder="E-mail" />
                        <input type="password" name="password" className="waypoint" placeholder="Password" />
                        <input type="password" name="repeat_password" className="waypoint" placeholder="Password" />
                        <button type="submit" className="car__search__submit" onClick={this.props.register.bind(this)}>Registration</button>
                    </div>
                    <div className="bottom__info">
                        <p>
                            Already registered? Please 
                            <a className="toggle-register"
                                 onClick={
                                     this.props.toggleForms
                                 }>
                            login</a>
                        </p>
                    </div>
                </form>    
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegModals)
