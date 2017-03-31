/**
 * Created by eugene on 30.03.17.
 */
import React, { Component } from 'react'
import moment from 'moment'
import request from 'request'
import config from './../../../config'
import store from './../../../store/store'
import { userShowFoundRoutes } from './../../../actions/userShowFoundRoutes'

class ReserveConfirmation extends Component {
    closeModal() {
        let modal = document.querySelector('.modal__summary');
        
        modal.classList.remove('active');
        document.body.classList.remove('active');
    }
    
    sendRequest() {
        let data = store.getState().userFinalRoute,
            modal = document.querySelector('.modal__summary'),
            dataToSend = {},
            foundRoutes = store.getState().foundRoutes,
            markers = store.getState().coordsToSearch.markers;
        
        dataToSend.trip_id = data.id;
        dataToSend.user_from = store.getState().coordsToSearch.coords.from;
        dataToSend.user_to = store.getState().coordsToSearch.coords.to;
        
        // console.log('dts', dataToSend);

        request({
            uri: config.server+'/carsearch',
            method: "post",
            form: dataToSend
        }, function(error, response, body) {
            if (foundRoutes.length > 0) {
                foundRoutes.forEach(foundRoute => {
                    foundRoute.polylines.forEach(polyline => polyline.setMap(null))
                })
            }

            markers.from.setMap(null);
            markers.to.setMap(null);

            store.dispatch(userShowFoundRoutes(''));

            setTimeout(() => {
                modal.classList.remove('active');
                document.body.classList.remove('active');
            }, 1500)
        });
    }
    
    render() {
        let data = this.props.data,
            foundRoutes = store.getState().foundRoutes;
        
        function checkSuccess() {
            if (foundRoutes === '') {
                return 'modal__summary__success active'
            }   else {
                return 'modal__summary__success'
            }
        }
        
        function checkSuccessContent() {
            if (foundRoutes === '') {
                return 'modal__summary__content hidden'
            }   else {
                return 'modal__summary__content'
            }
        }
        
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
        
        let duration = getFormattedTime(data.duration),
            durationToShow = duration.hrs+'год '+duration.mins+'хв.',
            date = moment(data.date_start).lang('uk').format('Do MMMM YYYY, hh:mm a');
        
        return (
            <div className="modal__summary">
                <div className={checkSuccessContent()}>
                    <h2>Підтвердження бронювання</h2>
                    <div className="summary__info">
                        <h4>Поїздка № {data.id}</h4>
                        <div className="summary__points">
                            <p><strong>від: </strong>{data.start_name}</p>
                            <p><strong>до: </strong>{data.end_name}</p>
                            <p><strong>ви прямуєте до: </strong>Житомир, Житомирська обл.</p>
                        </div>
                        <div className="summary__date">
                            <p><strong>Виїзд: </strong>{date}</p>
                        </div>
                        <div className="summary__car-info">
                            <p><strong>Автомобіль: </strong>ВАЗ 1488 Баклажанового кольору</p>
                        </div>
                        <div className="summary__duration">
                            <p><strong>Тривалість: </strong>{durationToShow}</p>
                        </div>
                        <div className="summary__price">
                            <p><strong>Вартість: </strong>{data.price}грн</p>
                        </div>
                    </div>
                    <div className="modal__bottom-controls">
                        <button className="summary__send" onClick={this.sendRequest}>Підтвердити</button>
                        <button className="summary__cancel" onClick={this.closeModal}>Відміна</button>
                    </div>
                </div>
                <div className={checkSuccess()}>
                    <h2>Вітаємо, ваш запит надіслано успішно</h2>
                </div>
            </div>
        )
    }
}

export default ReserveConfirmation