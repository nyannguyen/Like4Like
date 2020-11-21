import { createStore } from 'redux';
import reducer from '../reducers';
import initAction from '../actions/User';

const store = createStore(reducer);

export default store;