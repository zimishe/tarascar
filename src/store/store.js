/**
 * Created by eugene on 23.02.17.
 */

import { createStore, applyMiddleware } from 'redux'
import reducer from './../reducers/map'
import thunk from 'redux-thunk'

import initialState from './../store/initialState'

let store = createStore(reducer, initialState, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store
