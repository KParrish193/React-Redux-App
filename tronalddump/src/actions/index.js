import axios from 'axios';

export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";

//action creator
export const actionName = () => dispatch => {
    dispatch({ type: FETCH_TOGGLE });
    axios
        .get('https://www.tronalddump.io/random/quote')
        .then(res => { 
            console.log(res.data.value)
            dispatch ({ type: FETCH_SUCCESS, payload: res.data.value })
        })
        .catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }))
};