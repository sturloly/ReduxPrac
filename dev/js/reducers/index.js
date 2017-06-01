import {combineReducers} from 'redux'; // built in function {combineReducers}
import UserReducer from './reducer-users';  // create a central store to provide to index.js
import ActiveUser from './reducer-active-user';

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUser,
});

export default allReducers;
