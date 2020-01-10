import { put, takeEvery } from "redux-saga/effects";
import { ActionTypes } from "./reducer";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log("spawn incrementAsync");
  yield delay(1000);
  yield put({ type: ActionTypes.INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync);
}
