/**
 * Created by eugene on 07.03.17.
 */

import React, { Component } from 'react'

class LoggedOut extends Component {
    componentDidMount() {
        function showRegisterPopup() {
            let link = document.querySelector('.log-in__link'),
                switcher = document.querySelector('.actions__switcher'),
                controls = document.querySelectorAll('.actions__switcher li a'),
                formModal = document.querySelector('.forms-modal'),
                body = document.body,
                closeButton = document.querySelector('.close-reg-modal');
            
            function openPopup() {
                formModal.classList.toggle('active');
                body.classList.add('active');
            }
            
            if (link !== null) {
                link.onclick = (e) => {
                    e.preventDefault();
                    openPopup();
                };
                
                closeButton.onclick = () => {
                    body.classList.remove('active');
                    formModal.classList.remove('active');
                }
            }
        
            switcher.onclick = (e) => {
                let control = e.target;
                
                if (control.classList.contains('logged-out')) {
                    openPopup();    
                }   else {
                    
                    let tabs = document.querySelectorAll('.action__tab'),
                        controlData = control.getAttribute('data-tab');

                    controls.forEach((c) => {c.classList.remove('active')});
                    control.classList.add('active');

                    tabs.forEach((tab) => {
                        let tabData = tab.getAttribute('data-tab');

                        if (controlData === tabData) {
                            tabs.forEach((t) => {t.classList.remove('active')});
                            tab.classList.add('active')
                        }
                    })
                    
                }
            };
            
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