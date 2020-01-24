import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'

const Dumpism = props => {
    const store = useSelector(state => state.newReducer.dumpism);
    const dispatch = useDispatch();

    return (
        <div>
        <span>{store}</span>
        <button onClick={() => dispatch (actionName())}> New Dumpism </button>
        </div>
    );
};

export default Dumpism;