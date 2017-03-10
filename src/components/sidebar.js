/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
import Search from './searchPlace'
import SearchPlace from './searchCar'
import ActionsSwitcher from './support/actionsSwitcher'

class Sidebar extends Component {
    render() {
        function setSidebarContent() {
            let data = JSON.parse(sessionStorage.getItem('userData'));

            if (data !== null) {
                return <ActionsSwitcher />
            } 
        }
        
        return (
            <div className="gmap__sidebar">
                <Search />
                {setSidebarContent()}
                <div className="action__tabs">
                    <div className="action__tab active" data-tab="find">
                        <SearchPlace />
                    </div>
                    <div className="action__tab" data-tab="offer">
                        <p>Offer car</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default Sidebar