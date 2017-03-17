/**
 * Created by eugene on 03.03.17.
 */
import App from './../App'
import UserCabinet from './../components/userCabinet'
import Sidebar from './../components/sidebar'
import SearchCar from './searchCar'
import OfferCar from './offerCar'
import Map from './map'

import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

class PageRouter extends Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route component={App} path='/'>
                    <Route component={Map}/>
                    <Route component={Sidebar}>
                        <IndexRoute component={SearchCar}/>
                        <Route path='find' component={SearchCar}/>
                        <Route path='offer' component={OfferCar}/>
                    </Route>
                    <Route path='cabinet' component={UserCabinet} />
                </Route>
            </Router>
        ) 
    }
}


export default PageRouter