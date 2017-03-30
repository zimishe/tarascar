/**
 * Created by eugene on 24.03.17.
 */

import React, { Component } from 'react'
import moment from 'moment'

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
            durationToShow = duration.hrs+' год. '+duration.mins+' хв. ',
            date = moment(this.props.startDate).lang('uk').format('DD.MM.YYYY, hh:mm a');
        
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
                <span className="found-route__info">
                     <span className="found-route__from">
                        з: <strong>{this.props.from}</strong>
                    </span>
                    <span className="found-route__to">
                        до: <strong>{this.props.to}</strong>
                    </span>
                    <span className="found-route__text" style={borderColor}>
                        <span className="found-route__text__mask" style={style} />
                        <span className="found-route__duration"><strong>Виїзд:</strong> {date}</span>
                        <span className="found-route__duration">{durationToShow} в дорозі</span>
                        <span className="found-route__seats"><strong>К-ть місць:</strong> {this.props.seats}</span>
                        <span className="found-route__price">
                            <strong>Ціна:</strong> {this.props.price}грн
                        </span>
                    </span>
                </span>
                <button className="reserve-seat" onClick={this.props.showReserveModal}>
                    Забронювати
                </button>
            </label>
        )
    }
}

export default FoundRoute



