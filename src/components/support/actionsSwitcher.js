/**
 * Created by eugene on 09.03.17.
 */
import React, { Component } from 'react'

class ActionsSwitcher extends Component {
    componentDidMount() {
        
    }
    
    render() {
        let isLogged = this.props.isLogged;
        
        function checkLogin() {
            if (isLogged !== true) {
                return 'logged-out'
            }   
        }
        
        return (
            <ul className="actions__switcher">
                <li>
                    <a data-tab="find" className="active">Знайти водія</a>
                </li>
                <li>
                    <a data-tab="offer" className={checkLogin()}>Запропонувати поїздку</a>
                </li>
            </ul>
        )
    }
}

export default ActionsSwitcher