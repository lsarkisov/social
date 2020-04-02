import {
  REQUEST,
  SUCCESS,
  FAILURE,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
} from 'const/requests'

const auth = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case RESET_PASSWORD[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case RESET_PASSWORD[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    case CHANGE_PASSWORD[REQUEST]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })
    case CHANGE_PASSWORD[SUCCESS]:
      return Object.assign({}, state, {
        authorised: true,
        user: action.user,
      })
    case CHANGE_PASSWORD[FAILURE]:
      return Object.assign({}, state, {
        authorised: false,
        user: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default auth
