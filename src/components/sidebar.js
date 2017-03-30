/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
import SearchPlace from './../components/searchPlace'
import store from './../store/store'

class Sidebar extends Component {
    componentDidMount() {
        let sidebarToggle = document.querySelector('.sidebar__toggle'),
            sidebar = document.querySelector('.gmap__sidebar');
        
        if (sidebarToggle !== null) {
            sidebarToggle.onclick = (() => sidebar.classList.toggle('active'))
        }
    }
    
    render() {
        let foundRoutes = store.getState().foundRoutes;

        function checkRoutes() {
            if (foundRoutes !== '') {
                return 'gmap__sidebar active'
            }   else {
                return 'gmap__sidebar'
            }
        }
        
        return (
            <div className={checkRoutes()}>
                <div className="sidebar__toggle">
                    <span/>
                    <span/>
                    <span/>
                </div>
                <SearchPlace />
                {this.props.children}
            </div>
        )
    }
}

export default Sidebar