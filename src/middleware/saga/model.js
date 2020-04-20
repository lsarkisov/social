import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'

function* onImageUploadSuccess(data) {
  const { payload } = data
  yield put({
    type: types.MODEL_IMAGE_UPLOAD[SUCCESS],
    payload,
  })

  //   yield call(() => services.imageUpload(data.payload))
  //   try {
  //     yield put({
  //       type: types.MODEL_IMAGE_UPLOAD[SUCCESS],
  //       payload: { success: true },
  //     })
  //   } catch (error) {
  //     yield put({ type: types.MODEL_IMAGE_UPLOAD[FAILURE], error })
  //   }
}

export function* onImageUploadRequest() {
  yield takeEvery(types.MODEL_IMAGE_UPLOAD[REQUEST], onImageUploadSuccess)
}
