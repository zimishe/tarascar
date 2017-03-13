/**
 * Created by eugene on 13.03.17.
 */

import React, { Component } from 'react'
import store from './../store/store'
import { connect } from 'react-redux'

class OfferCar extends Component {
    render() {
        return (
            <form className="offer-car__form">
                <h2>Створити поїздку</h2>
                <div className="offer-car__inputs">
                    <h3>Шлях</h3>
                    <input type="text" id="offer__from" name="offer__from" placeholder="Точка виїзду" required />
                    <input type="text" id="offer__to" name="offer__to" placeholder="Кінцева точка" required />
                    <h3>Деталі</h3>
                    <input type="number" id="offer__price" name="offer__price" placeholder="Ціна" />
                    <input type="number" id="offer__places__count" name="offer__places__count" placeholder="К-ть місць" />
                    <h3>Час</h3>
                    <input type="text" id="offer__start__time" name="offer__start__time" placeholder="Час відправлення"/>
                    <input type="text" id="offer__end__time" name="offer__end__time" placeholder="Час прибуття"/>
                    <button>Створити</button>
                </div>
            </form>
        )
    }
}

export default OfferCar