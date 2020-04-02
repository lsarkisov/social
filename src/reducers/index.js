import { combineReducers } from 'redux'
import auth from './auth'
import login from './login'
import password from './password'

const reducers = combineReducers({
  auth,
  login,
  password,
})

export default reducers
