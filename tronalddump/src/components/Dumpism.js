import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'

const Dumpism = props => {
    const store = useSelector(state => state.newReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionName());
    }, [dispatch]);

    return (
        <div>
        <p>{store.dumpism}</p>
        <button onClick={() => dispatch (actionName())}> New Dumpism </button>
        </div>
    );
};

export default Dumpism;