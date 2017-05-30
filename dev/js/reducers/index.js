import {combineReducers} from 'redux'; // built in function {combineReducers}
import UserReducer from './reducer-users';

const allReducers = combineReducers({
    users: UserReducer,
});

export default allReducers;
