/**
 * Created by eugene on 03.03.17.
 */
import App from './../App'
import UserCabinet from './../components/userCabinet'

import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class PageRouter extends Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path='/' component={App} />
                <Route path='/cabinet' component={UserCabinet} />
            </Router>
        )
    }
}

export default PageRouter