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
        },
        borderColor = {
            borderColor: this.props.routeColor
        };
        
        return (
            <label className="single-route">
                <input type="radio" name="single_route" 
                       onChange={this.props.chooseRoute.bind(this, this.props.routeId, this.props.routes)}
                />
                <span className="single-route__caption">
                    <span className="single-route__color" style={style}>
                        <span className="single-route__number">{this.props.routeId + 1}</span>
                    </span>
                </span>
                <span className="single-route__text" style={borderColor}>
                    <span className="single-route__text__mask" style={style} />
                    <span>{this.props.totalDistance},</span>
                    <span>{this.props.totalDuration} в дорозі</span>
                </span>
            </label>
        )
    }
}

export default SingleRoute