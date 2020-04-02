import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const fields = {
  email: null,
  password: null,
}

const login = (state = fields, action) => {
  switch (action.type) {
    case types.LOGIN_COMMON[REQUEST]:
      return Object.assign({}, state, {
        token: null,
        role: null,
      })
    case types.LOGIN_COMMON[SUCCESS]:
      const { token, role } = action.payload
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)

      return Object.assign({}, state, {
        token,
        role,
      })
    case types.LOGIN_COMMON[FAILURE]:
      return Object.assign({}, state, {
        token: null,
        role: null,
      })

    case types.LOGOUT_COMMON:
      localStorage.removeItem('token')
      localStorage.removeItem('role')

      return Object.assign({}, state, {
        token: null,
        role: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default login
