/**
 * Created by eugene on 09.03.17.
 */
import React, { Component } from 'react'

class ActionsSwitcher extends Component {
    render() {
        return (
            <ul className="actions__switcher">
                <li>
                    <a>Знайти водія</a>
                </li>
                <li>
                    <a>Запропонувати поїздку</a>
                </li>
            </ul>
        )
    }
}

export default ActionsSwitcher