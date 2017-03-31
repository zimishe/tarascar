/**
 * Created by eugene on 09.03.17.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

class ActionsSwitcher extends Component {
    render() {
        let isLogged = this.props.isLogged;
        // eslint-disable-next-line 
        function checkLogin() {
            if (isLogged !== true) {
                return 'logged-out'
            }   
        }
        
        return (
            <ul className="actions__switcher">
                <li>
                    <Link to="find" activeClassName="active">Знайти водія</Link>
                </li>
                <li>
                    <Link to="offer" activeClassName="active" className={checkLogin()}>Створити поїздку</Link>
                </li>
            </ul>
        )
    }
}

export default ActionsSwitcher