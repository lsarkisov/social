import { combineReducers } from 'redux'
import onboarding from './onboarding'
import login from './login'
import password from './password'

const reducers = combineReducers({
  onboarding,
  login,
  password,
})

export default reducers
