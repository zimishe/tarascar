import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import PageRouter from './components/router'
import './../assets/css/compressed/style.css'

ReactDOM.render(
    <Provider store={store}>
        <PageRouter />
    </Provider>,
  document.getElementById('root')
);

