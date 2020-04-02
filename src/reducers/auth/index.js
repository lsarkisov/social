import { LOG_IN } from 'const'
import { REQUEST, SUCCESS, FAILURE } from 'const/requests'

const auth = (state = {}, action) => {
  switch (action.type) {
    case LOG_IN[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case LOG_IN[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case LOG_IN[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default auth
