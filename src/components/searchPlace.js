/**
 * Created by eugene on 23.02.17.
 */

import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'

const mapStateToProps = function() {
    let data = store.getState();
    return {
        data : data
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        dispatch,
        searchHandler: (event) => {
           
        }
    };
};

class Search extends Component {
    
    render() {
        return (
            <div className="gmap__search">
                <input type="search" ref="input" id="search" placeholder="Search.." onChange={this.props.searchHandler.bind(this)} />
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)


