// Import stylesheets
import './style.css';
import store from './store';
import { bugAdded, bugResolved } from './actions';

store.dispatch(bugAdded('Bug'));
store.dispatch(bugResolved(1));

console.log(store.getState());
