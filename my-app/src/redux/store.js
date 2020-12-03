import { createStore, compose, applyMiddleware } from "redux";

import { counterReducer } from "./reducers/counterReducer";

import Logger from "./middleware/logger";

const middleware = [Logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
