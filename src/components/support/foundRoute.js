/**
 * Created by eugene on 24.03.17.
 */

import React, { Component } from 'react'

class FoundRoute extends Component {
    render() {
        let style = {
                backgroundColor: this.props.routeColor
            },
            borderColor = {
                borderColor: this.props.routeColor
            };

        function getFormattedTime(totalDuration) {
            if (totalDuration >= 3600) {
                return {
                    hrs: Math.ceil((totalDuration/3600)),
                    mins: Math.ceil((totalDuration%3600)/60)
                }
            }   else {
                return {
                    hrs: 0,
                    mins: Math.ceil((totalDuration%3600)/60)
                }
            }
        }
        
        let duration = getFormattedTime(this.props.duration),
            durationToShow = duration.hrs+' год. '+duration.mins+' хв. ';
        
        return (
            <label className="found-route">
                <input type="radio" name="found_route"
                       onChange={this.props.chooseRoute.bind(this, this.props.id, this.props.foundRoutes)}
                />
                <span className="found-route__caption">
                    <span className="found-route__color" style={style}>
                        <span className="found-route__number">{this.props.id + 1}</span>
                    </span>
                </span>
                <span className="found-route__text" style={borderColor}>
                    <span className="found-route__text__mask" style={style} />
                    <span>{durationToShow} в дорозі</span>
                </span>
            </label>
        )
    }
}

export default FoundRoute



