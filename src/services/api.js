import { API_URL } from '../const/api'

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function callApi(endpoint, header) {
  return fetch(`${API_URL}${endpoint}`, header)
    .then((response) => response.json())
    .catch((error) => console.log('ERROR MESSAGE: ' + error))
}

export const logIn = () =>
  callApi('/posts', {
    method: 'get',
  })
