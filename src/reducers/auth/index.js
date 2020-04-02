import {
  REQUEST,
  SUCCESS,
  FAILURE,
  AUTH_SOCIAL,
  AUTH_COMMON,
} from 'const/requests'

const auth = (state = {}, action) => {
  switch (action.type) {
    case AUTH_SOCIAL[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case AUTH_SOCIAL[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case AUTH_SOCIAL[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    case AUTH_COMMON[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case AUTH_COMMON[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case AUTH_COMMON[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default auth
