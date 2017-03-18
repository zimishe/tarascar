/**
 * Created by eugene on 13.03.17.
 */

import React, { Component } from 'react'
import MapRoutes from './support/routes'
import { initOfferSearchFields } from './../actions/support/initOfferSearchFields'

class OfferCar extends Component {
    componentDidMount() {
        let map = window.map,
            google = window.google;

        if ((map !== null) && (google !== undefined)) {
            initOfferSearchFields(map)
        }
    }
    
    render() {
        return (
            <div className="offer-car__form__wrap">
                <form className="offer-car__form" id="offer_form" method="post">
                    <h2>Створити поїздку</h2>
                    <div className="offer-car__inputs">
                        <h3>Шлях</h3>
                        <input type="text" id="offer__from" name="offer__from" placeholder="Точка виїзду" required />
                        <input type="text" id="offer__to" name="offer__to" placeholder="Кінцева точка" required />
                        <h3>Деталі</h3>
                        <input type="number" id="offer__price" name="offer__price" placeholder="Ціна" required/>
                        <input type="number" id="offer__places__count" name="offer__places__count" placeholder="К-ть місць" required />
                        <h3>Час</h3>
                        <input type="text" id="offer__start__time" name="offer__start__time" placeholder="Час відправлення"/>
                        <input type="text" id="offer__end__time" name="offer__end__time" placeholder="Час прибуття"/>
                        <button>Створити</button>
                    </div>
                </form>
                <MapRoutes />
            </div>
        )
    }
}

export default OfferCar