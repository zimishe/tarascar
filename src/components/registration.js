/**
 * Created by taras on 03.03.17.
 */
import React, { Component } from 'react'

import request from 'request'

class Test extends Component{
    render() {
        return (
            <form action="http://localhost:8888/sign-up" method="post" className="car__search">
                <h2>Regis</h2>
                <div className="car__search__inputs">
                    <input type="text" name="name" className="waypoint" placeholder="Name" />
                    <input type="text" name="surname" className="waypoint" placeholder="Surname" />
                    <input type="text" name="email" className="waypoint" placeholder="E-mail" />
                    <input type="text" name="password" className="waypoint" placeholder="Password" />
                    <input type="text" name="repeat_password" className="waypoint" placeholder="Password" />
                    <button type="submit" className="car__search__submit">Registration</button>
                </div>
            </form>
        )
    }
}

export default Test
