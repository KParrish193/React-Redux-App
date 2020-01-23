import { FETCH_TOGGLE, FETCH_SUCCESS } from '../actions/index.js';

const initialState = {
    date: Date.now(),
    drumpism: "",
    error: "",
    isFetching: false
}

const asyncReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_TOGGLE:
            return {
                ...state,
                isFetching: !state.isFetching,
                error: action.payload ? action. payload : ""
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                drumpism: action.payload,
                isFetching: false, 
                error: ""
            }
        default: 
            return state
    }
};

export default asyncReducer;