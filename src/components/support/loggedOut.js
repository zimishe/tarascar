/**
 * Created by eugene on 07.03.17.
 */

import React, { Component } from 'react'

class LoggedOut extends Component {
    componentDidMount() {
        function showRegisterPopup() {
            let link = document.querySelector('.log-in__link'),
                formModal = document.querySelector('.forms-modal'),
                body = document.body,
                closeButton = document.querySelector('.close-reg-modal');
            
            if (link !== null) {
                // console.log('here');
                
                link.onclick = (e) => {
                    e.preventDefault();
                    formModal.classList.toggle('active');
                    body.classList.add('active');
                };
                
                closeButton.onclick = () => {
                    body.classList.remove('active');
                    formModal.classList.remove('active');
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