/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
import Search from './searchPlace'
import SearchPlace from './searchCar'

class Sidebar extends Component {
    render() {
        function setSidebarContent() {
            let data = JSON.parse(sessionStorage.getItem('userData'));

            if (data !== null) {
                
            }   else {
                return <SearchPlace />
            }   
        }
        
        return (
            <div className="gmap__sidebar">
                <Search />
            </div>
        )
    }
}


export default Sidebar