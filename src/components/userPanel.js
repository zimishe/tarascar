/**
 * Created by eugene on 07.03.17.
 */
import React, { Component } from 'react'
import LoggedIn from './support/loggedIn'
import LoggedOut from './support/loggedOut'

class UserPanel extends Component {
    render() {
        let isLogged = this.props.data;
        
        function checkIfLogged(isLogged) {
            if (isLogged === true) {
                return <LoggedIn username='Eugene'/>
            }   else {
                return <LoggedOut />
            }
        }
        
        return (
            <div className="user-panel">
                {checkIfLogged(isLogged)}   
            </div>
        )
    }
}

export default UserPanel