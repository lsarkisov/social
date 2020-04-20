import { REQUEST, SUCCESS, FAILURE } from 'const/actions'
import * as types from 'const/requests'

const modelImageUpload = (state = {}, action) => {
  switch (action.type) {
    case types.MODEL_IMAGE_UPLOAD[REQUEST]:
      return Object.assign({}, state, {
        uploadImage: state.uploadImage,
      })
    case types.MODEL_IMAGE_UPLOAD[SUCCESS]:
      return Object.assign({}, state, {
        uploadImage: { ...state.uploadImage, ...action.payload },
      })
    case types.MODEL_IMAGE_UPLOAD[FAILURE]:
      return Object.assign({}, state, {
        uploadImage: null,
      })

    default:
      return Object.assign({}, state)
  }
}

export default modelImageUpload
