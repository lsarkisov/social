import { REACT_APP_API_URL, AUTHORIZATION_HEADER } from 'const/api'

function getToken() {
  const token = localStorage.getItem('token')
  if (token) {
    return token
  }
  console.error('Empty token')
}

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const authHeader = {
  ...jsonHeaders,
  ...{
    [AUTHORIZATION_HEADER]: `Bearer ${getToken()}`,
  },
}

function callApi(endpoint, headers) {
  return fetch(`${REACT_APP_API_URL}${endpoint}`, headers)
    .then((response) => {
      return response.clone().json()
    })
    .then((response) => response)
    .catch((error) => error)
}

/* Onboarding
----------------------------------------*/
export const onboarding = (body) =>
  callApi('/onboarding/register', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })

export const login = (body) =>
  callApi('/auth/token', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })

export const resetPassword = (body) =>
  callApi('/user/password/reset', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })

export const changePassword = (body) => {
  callApi('/user/password/change', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })
}

/* Model profile
----------------------------------------*/
export const updateBooking = (body) => {
  callApi('profile/model/update', {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body),
  })
}

/* Create Job
----------------------------------------*/
export const inviteModelToJob = (body) => {
  callApi('applications/invite', {
    method: 'post',
    headers: authHeader,
    body: JSON.stringify(body),
  })
}
