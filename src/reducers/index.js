import { combineReducers } from 'redux'
import onboarding from './onboarding'
import login from './login'
import password from './password'
import modelImageUpload from './model/image-upload'

const reducers = combineReducers({
  onboarding,
  login,
  password,
  modelImageUpload,
})

export default reducers
