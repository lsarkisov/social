import {
  REQUEST,
  SUCCESS,
  FAILURE,
  LOGIN_COMMON,
  LOGOUT_COMMON,
} from 'const/requests'

const auth = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_COMMON[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case LOGIN_COMMON[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case LOGIN_COMMON[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    case LOGOUT_COMMON[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case LOGOUT_COMMON[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case LOGOUT_COMMON[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default auth
