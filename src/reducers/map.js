/**
 * Created by eugene on 23.02.17.
 */

import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {
    
    switch (action.type) {
        case 'PLACE_CHANGED' : return {
            markers: action.markers, isLogged: state.isLogged, routes: state.routes
        };
        
        case 'USER_LOGGED_IN' : return {
            markers: state.markers, isLogged: true, routes: state.routes
        };
        
        case 'USER_LOGGED_OUT' : return {
            markers: state.markers, isLogged: false, routes: state.routes
        };
        
        case 'DRIVER_SELECTED_ROUTES' : return {
            markers: state.markers, isLogged: state.isLogged, routes: action.routes
        };

        default : return state
    }
};

export default reducer
