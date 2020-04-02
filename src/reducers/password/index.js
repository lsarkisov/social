import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const fields = {
  email: null,
  password: null,
}

const auth = (state = fields, action) => {
  switch (action.type) {
    case types.RESET_PASSWORD[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case types.RESET_PASSWORD[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case types.RESET_PASSWORD[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    case types.CHANGE_PASSWORD[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case types.CHANGE_PASSWORD[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case types.CHANGE_PASSWORD[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default auth
