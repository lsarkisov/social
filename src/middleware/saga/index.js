  
import { put, call, takeEvery, all } from "redux-saga/effects";
import * as types from "../../const";
import { REQUEST, SUCCESS } from "../../const/requests";
import * as services from "../../services/api";

function* onLogInSucess(data) {
  const payload = yield call(() => services.logIn(data.payload));
  yield put({ type: types.LOG_IN[SUCCESS], payload });
}

function* requestLogIn(data) {
  yield takeEvery(
    types.LOG_IN[REQUEST], onLogInSucess);
}

export default function* rootSaga() {
  yield all([
    requestLogIn(),
  ]);
}