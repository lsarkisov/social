import { put, call, takeEvery, all } from 'redux-saga/effects'
import * as types from 'const/requests'
import { REQUEST, SUCCESS, FAILURE } from 'const/requests'
import * as services from 'services/api'

function* onAuthCommonSuccess(data) {
  const payload = yield call(() => services.auth(data.payload))
  try {
    const { token, role } = payload
    if (token && role) {
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
    }

    yield put({ type: types.AUTH_COMMON[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.AUTH_COMMON[FAILURE], error })
  }
}

function* authCommonRequest() {
  yield takeEvery(types.AUTH_COMMON[REQUEST], onAuthCommonSuccess)
}

function* onLoginCommonSuccess(data) {
  const payload = yield call(() => services.login(data.payload))

  try {
    const { token, role } = payload
    if (token && role) {
      localStorage.setItem('token', token)
      localStorage.setItem('role', role)
    }

    yield put({ type: types.LOGIN_COMMON[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.LOGIN_COMMON[FAILURE], error })
  }
}

function* loginCommonRequest() {
  yield takeEvery(types.LOGIN_COMMON[REQUEST], onLoginCommonSuccess)
}

function* onResetPasswordSuccess(data) {
  const payload = yield call(() => services.resetPassword(data.payload))
  console.log('reset', data, payload)
  try {
    yield put({ type: types.RESET_PASSWORD[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.RESET_PASSWORD[FAILURE], error })
  }
}

function* resetPasswordRequest() {
  yield takeEvery(types.RESET_PASSWORD[REQUEST], onResetPasswordSuccess)
}

function* onChangePasswordSuccess(data) {
  const payload = yield call(() => services.changePassword(data.payload))
  console.log('change', data, payload)
  try {
    yield put({ type: types.CHANGE_PASSWORD[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.CHANGE_PASSWORD[FAILURE], error })
  }
}

function* changePasswordRequest() {
  yield takeEvery(types.CHANGE_PASSWORD[REQUEST], onChangePasswordSuccess)
}

export default function* rootSaga() {
  yield all([
    authCommonRequest(),
    loginCommonRequest(),
    resetPasswordRequest(),
    changePasswordRequest(),
  ])
}
