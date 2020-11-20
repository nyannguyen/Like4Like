import { createStore } from 'redux';
import reducer from '../reducers';
import initAction from '../actions/User';

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch(initAction());

export default store;