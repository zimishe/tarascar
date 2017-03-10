/**
 * Created by eugene on 09.03.17.
 */
import React, { Component } from 'react'

class ActionsSwitcher extends Component {
    componentDidMount() {
        let controls = document.querySelectorAll('.actions__switcher li a'),
            tabs = document.querySelectorAll('.action__tab');
        
        controls.forEach((control) => {
            control.onclick = () => {
                let controlData = control.getAttribute('data-tab');
                
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
        })
    }
    
    render() {
        return (
            <ul className="actions__switcher">
                <li>
                    <a data-tab="find" className="active">Знайти водія</a>
                </li>
                <li>
                    <a data-tab="offer">Запропонувати поїздку</a>
                </li>
            </ul>
        )
    }
}

export default ActionsSwitcher