/**
 * Created by eugene on 07.03.17.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import store from './../../store/store'
import { logOut } from './../../actions/support/logout'

class LoggedIn extends Component {
    componentDidMount() {
        let logout = document.querySelector('.log-out');
        
        logout.onclick = () => {
            store.dispatch(logOut(false));
            sessionStorage.removeItem('userData');
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
