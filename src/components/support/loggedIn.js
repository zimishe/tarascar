/**
 * Created by eugene on 07.03.17.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import store from './../../store/store'
import { logOut } from './../../actions/support/logout'

class LoggedIn extends Component {
    componentDidMount() {
        let logout = document.querySelector('.log-out'),
            switcherLoggedButton = document.querySelector('.actions__switcher li:nth-last-of-type(1) a'),
            offerTab = document.querySelector('.action__tab:nth-last-of-type(1)'),
            findTab = document.querySelector('.action__tab:nth-of-type(1)');
        
        logout.onclick = () => {
            store.dispatch(logOut(false));
            sessionStorage.removeItem('userData');
            switcherLoggedButton.classList.add('logged-out');
            offerTab.classList.remove('active');
            findTab.classList.add('active');
        }
    }
    
    render() {
        let username = this.props.username;
        
        return (
            <div className="user-panel__welcome">
                <p>Welcome, {username}</p>
                <p>Go to <Link to='/cabinet'>cabinet</Link></p>
                <p><a className="log-out" >Log out</a></p>
            </div>    
        )
    }
}

export default LoggedIn
