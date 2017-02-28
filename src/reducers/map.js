/**
 * Created by eugene on 23.02.17.
 */

import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'PLACE_CHANGED' :return {
            markers: action.markers
        };

        default : return state
    }
};

export default reducer
