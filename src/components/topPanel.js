/**
 * Created by eugene on 28.03.17.
 */

import React, { Component } from 'react'

class TopPanel extends Component {
    render() {
        console.log('tch1', this.props);
        
        return (
            <div className="gmap__top-panel">
                {this.props.children}
            </div>
        )
    }
}

export default TopPanel