import { combineReducers } from 'redux';
import login from './auth/login';

const reducers = combineReducers({
  login,
});

export default reducers;
