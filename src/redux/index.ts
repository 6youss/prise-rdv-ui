import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {} from "./sagas";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(helloSaga);

export default store;
