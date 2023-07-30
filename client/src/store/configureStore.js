import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import logger from "redux-logger";
// import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {},
    middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
})
// sagaMiddleware.run(rootSaga);