import * as type from 'const/requests'
import { REQUEST, SUCCESS, FAILURE } from 'const/requests'

function action(action, payload = {}) {
  return { action, ...payload }
}

export const authCommonAction = {
  request: (payload) => action(type.AUTH_COMMON[REQUEST], payload),
  success: (payload) => action(type.AUTH_COMMON[SUCCESS], payload),
  failure: (error) => action(type.AUTH_COMMON[FAILURE], error),
}

export const logInAction = {
  request: (payload) => action(type.LOGIN_COMMON[REQUEST], payload),
  success: (payload) => action(type.LOGIN_COMMON[SUCCESS], payload),
  failure: (error) => action(type.LOGIN_COMMON[FAILURE], error),
}

export const logOutAction = {
  request: () => action(type.LOGOUT_COMMON[REQUEST]),
  success: (payload) => action(type.LOGOUT_COMMON[SUCCESS], payload),
  failure: (error) => action(type.LOGOUT_COMMON[FAILURE], error),
}

export const resetPasswordAction = {
  request: () => action(type.RESET_PASSWORD[REQUEST]),
  success: (payload) => action(type.RESET_PASSWORD[SUCCESS], payload),
  failure: (error) => action(type.RESET_PASSWORD[FAILURE], error),
}

export const changePasswordAction = {
  request: () => action(type.CHANGE_PASSWORD[REQUEST]),
  success: (payload) => action(type.CHANGE_PASSWORD[SUCCESS], payload),
  failure: (error) => action(type.CHANGE_PASSWORD[FAILURE], error),
}
