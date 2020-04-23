import { put, takeEvery, call } from 'redux-saga/effects'
import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'
import * as services from 'services/api'
/*
  name (firstName, lastName),
  date (birthDate),
  gender +,
  age,
  hairColor,
  hairType,
  eyeColor,
  ethnicity,
  country,
  city,
  dressSizeEU,
  shoeSizeEU,
  height,
  languages,
  categories,
*/

// const fields = {
//   avatar: '-',
//   booking: null,
//   firstName: '-',
//   lastName: '-',
//   status: null,
//   agency: null,
//   categories: null,
//   gender: null,
//   birthDate: null,
//   ethnicity: null,
//   eyes: null,
//   hair: null,
//   height: null,
//   collar: null,
//   chest: null,
//   waist: null,
//   hip: null,
// }

const fields = {
  avatar: null,
  booking: null,
  firstName: null,
  lastName: null,
  status: null,
  agency: null,
  categories: null,
  gender: null,
  birthDate: null,
  ethnicity: null,
  eyes: null,
  hair: null,
  height: null,
  collar: null,
  chest: null,
  waist: null,
  hip: null,
}

function* onBookingUpdateSuccess(data) {
  const payload = yield call(() =>
    services.updateBooking({ ...fields, ...data.payload }),
  )
  console.log('PAYLOAD', payload)

  try {
    yield put({ type: types.MODEL_BOOKING_UPDATE[SUCCESS], payload })
  } catch (error) {
    yield put({ type: types.MODEL_BOOKING_UPDATE[FAILURE], error })
  }
}

export function* onBookingUpdateRequest() {
  yield takeEvery(types.MODEL_BOOKING_UPDATE[REQUEST], onBookingUpdateSuccess)
}

function* onImageUploadSuccess(data) {
  const { payload } = data
  yield put({
    type: types.MODEL_IMAGE_UPLOAD[SUCCESS],
    payload,
  })
}

export function* onImageUploadRequest() {
  yield takeEvery(types.MODEL_IMAGE_UPLOAD[REQUEST], onImageUploadSuccess)
}
