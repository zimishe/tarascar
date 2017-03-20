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
            switcherLoggedButton = document.querySelector('.actions__switcher li:nth-last-of-type(1) a');
        
        logout.onclick = () => {
            store.dispatch(logOut(false));
            sessionStorage.removeItem('userData');
            switcherLoggedButton.classList.add('logged-out');
        }
    }
    
    render() {
        // console.log('tp', this.props);
        let username = this.props.username;
        
        return (
            <div className="user-panel__welcome">
                <p>Welcome, {username}</p>
                <p>Go to <Link to='cabinet'>cabinet</Link></p>
                <p><Link to="find" className="log-out">Log out</Link></p>
            </div>    
        )
    }
}

export default LoggedIn
