/**
 * Created by eugene on 03.03.17.
 */
import App from './../App'
import UserCabinet from './../components/userCabinet'
import SearchCar from './searchCar'
import OfferCar from './offerCar'
import UserPanel from './userPanel'
import Map from './map'
import Registration from './registration'

import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

class PageRouter extends Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route component={App} path="/">
                    <Route component={UserPanel}/>
                    <Route component={Map}/>
                    <Route>
                        <IndexRoute component={SearchCar}/>
                        <Route component={SearchCar} path="find" />
                        <Route component={OfferCar} path="offer" />
                    </Route>
                    <Route component={Registration}/>
                </Route>
                <Route component={UserCabinet}/>
            </Router>
        ) 
    }
}

export default PageRouter