/**
 * Created by eugene on 07.03.17.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'

class LoggedIn extends Component {
    render() {
        let username = this.props.username;
        
        return (
            <div className="user-panel__welcome">
                <p>Welcome, {username}</p>
                <p>Go to <Link to='/cabinet'>cabinet</Link></p>
            </div>    
        )
    }
}

export default LoggedIn
