import { put, takeEvery, all } from "redux-saga/effects";
import { ActionTypes } from "./reducer";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  console.log("spawn incrementAsync");
  yield delay(1000);
  yield put({ type: ActionTypes.INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga() {
  yield all([incrementAsync(), watchIncrementAsync()]);
}
