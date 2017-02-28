/**
 * Created by eugene on 23.02.17.
 */

import { createStore } from 'redux'
import reducer from './../reducers/map'
import initialState from './../store/initialState'

let store = createStore(reducer, initialState);

export default store
