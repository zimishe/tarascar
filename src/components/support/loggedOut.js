/**
 * Created by eugene on 07.03.17.
 */

import React, { Component } from 'react'

class LoggedOut extends Component {
    componentDidMount() {
        function showRegisterPopup() {
            let link = document.querySelector('.log-in__link'),
                registerForm = document.querySelector('#registration');
            
            if (link !== null) {
                // console.log('here');
                
                link.onclick = (e) => {
                    e.preventDefault();
                    registerForm.classList.toggle('active');
                }
            }
        }

        showRegisterPopup();
    }
    
    render() {
        
        return (
            <div className="user-panel--logged-out">
                <p>Welcome!</p>
                <p>You are not logged in. <a className="log-in__link">Log in</a></p>
            </div>
        )
    }
}

export default LoggedOut