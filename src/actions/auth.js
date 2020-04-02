import * as type from 'const'
import { REQUEST, SUCCESS, FAILURE } from 'const/requests'

function action(type, payload = {}) {
  return { type, ...payload }
}

export const logInAction = {
  request: () => action(type.LOG_IN[REQUEST]),
  success: (data) => action(type.LOG_IN[SUCCESS], data),
  failure: (error) => action(type.LOG_IN[FAILURE], error),
}
