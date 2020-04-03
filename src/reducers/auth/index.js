import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const auth = (state = {}, action) => {
  switch (action.type) {
    case types.AUTH_SOCIAL[REQUEST]:
      return Object.assign({}, state, {
        user: null,
      })
    case types.AUTH_SOCIAL[SUCCESS]:
      return Object.assign({}, state, {
        user: action.payload,
      })
    case types.AUTH_SOCIAL[FAILURE]:
      return Object.assign({}, state, {
        user: null,
      })

    case types.AUTH_COMMON[REQUEST]:
      return Object.assign({}, state, {
        user: null,
      })
    case types.AUTH_COMMON[SUCCESS]:
      return Object.assign({}, state, {
        user: action.payload,
      })
    case types.AUTH_COMMON[FAILURE]:
      return Object.assign({}, state, {
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default auth
