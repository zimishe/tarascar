/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
import Search from './searchPlace'
import SearchPlace from './searchCar'

class Sidebar extends Component {
    render() {
        return (
            <div className="gmap__sidebar">
                <Search />
                <SearchPlace />
            </div>
        )
    }
}

export default Sidebar