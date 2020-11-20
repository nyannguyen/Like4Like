import { combineReducers } from 'redux';
import user from './User';
import request from './Request';

const reducers = combineReducers({
    User: user,
    Request: request
});

export default reducers;