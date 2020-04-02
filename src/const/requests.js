export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const ROLE_COMPANY_USER = 'ROLE_COMPANY_USER'
export const ROLE_MODEL_USER = 'ROLE_MODEL_USER'

export const ENTITY_ALREADY_EXISTS = 'ENTITY_ALREADY_EXISTS'
export const ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND'

export const AUTH_SOCIAL = createRequestTypes('AUTH_SOCIAL')
export const AUTH_COMMON = createRequestTypes('AUTH_COMMON')
export const AUTH_VALIDATE = 'AUTH_VALIDATE'

export const LOGIN_COMMON = createRequestTypes('LOGIN_COMMON')
export const LOGOUT_COMMON = 'LOGOUT_COMMON'
export const LOGIN_VALIDATE = 'LOGIN_VALIDATE'
export const LOGIN_TRY_AGAIN = 'LOGIN_TRY_AGAIN'

export const RESET_PASSWORD = createRequestTypes('RESET_PASSWORD')
export const CHANGE_PASSWORD = createRequestTypes('CHANGE_PASSWORD')
export const PASSWORD_VALIDATE = 'PASSWORD_VALIDATE'
