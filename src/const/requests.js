import { REQUEST, SUCCESS, FAILURE } from 'const/actions'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

/* Server variables
----------------------------------------*/
export const ENTITY_ALREADY_EXISTS = 'ENTITY_ALREADY_EXISTS'
export const ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND'

/* Roles
----------------------------------------*/
export const ROLE_COMPANY_USER = 'ROLE_COMPANY_USER'
export const ROLE_MODEL_USER = 'ROLE_MODEL_USER'

/* Authorisation
----------------------------------------*/
export const AUTH_SOCIAL = createRequestTypes('AUTH_SOCIAL')
export const AUTH_COMMON = createRequestTypes('AUTH_COMMON')

/* Login/Logout
----------------------------------------*/
export const LOGIN_COMMON = createRequestTypes('LOGIN_COMMON')
export const LOGOUT_COMMON = 'LOGOUT_COMMON'

/* Reset password
----------------------------------------*/
export const RESET_PASSWORD = createRequestTypes('RESET_PASSWORD')
export const CHANGE_PASSWORD = createRequestTypes('CHANGE_PASSWORD')
