/**
 * Created by eugene on 07.03.17.
 */
import React, { Component } from 'react'
import LoggedIn from './support/loggedIn'
import LoggedOut from './support/loggedOut'
import ActionsSwitcher from './support/actionsSwitcher'

class UserPanel extends Component {
    render() {
        let isLogged = this.props.data;
        
        function checkIfLogged(isLogged) {
            if (isLogged === true) {
                let username = JSON.parse(sessionStorage.getItem('userData')).name;
                
                return <LoggedIn username={username} />
            }   else {
                return <LoggedOut />
            }
        }

        function setSidebarContent() {
            let isLogged = sessionStorage.getItem('userData'),
                data;

            (isLogged !== null) ? data = true : data = false;

            return <ActionsSwitcher isLogged={data} />
        }
        
        return (
            <div className="user-panel">
                {setSidebarContent()}    
                {checkIfLogged(isLogged)}   
            </div>
        )
    }
}

export default UserPanel