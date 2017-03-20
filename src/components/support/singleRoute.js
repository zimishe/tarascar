/**
 * Created by eugene on 16.03.17.
 */
import React, { Component } from 'react'
// eslint-disable-next-line 
import store from './../../store/store'
// eslint-disable-next-line 
import { setRoutes } from './../../actions/setRoutes'

class SingleRoute extends Component {
    render() {
        let style = {
            backgroundColor: this.props.routeColor
        };
        
        return (
            <label className="single-route">
                <input type="radio" name="single_route" onChange={this.props.chooseRoute.bind(this, this.props.routeId, this.props.routes)}/>
                <span className="single-route__caption">
                    <h2>Варіант {this.props.routeId + 1}</h2>
                    <span className="single-route__color" style={style} />
                </span>
                <div className="single-route__text">
                    <span>{this.props.totalDistance},</span>
                    <span>{this.props.totalDuration} в дорозі</span>
                </div>
            </label>
        )
    }
}

export default SingleRoute