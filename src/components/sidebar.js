/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
import SearchPlace from './../components/searchPlace'

class Sidebar extends Component {
    render() {
        return (
            <div className="gmap__sidebar">
                <SearchPlace />
                {this.props.children}
            </div>
        )
    }
}

export default Sidebar