import { createStore, applyMiddleware } from 'redux';
import newReducer from './reducers/newReducer';
import thunk from 'redux-thunk';

const configRedux = () => createStore(newReducer, applyMiddleware(thunk));

export default configRedux;