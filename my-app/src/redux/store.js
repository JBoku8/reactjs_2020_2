import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import languageReducer from "./reducers/languageReducer";

const middlwares = [reduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const comibinedReducers = combineReducers({
  app: userReducer,
  appLang: languageReducer,
});

const rootStore = createStore(
  comibinedReducers,
  composeEnhancers(applyMiddleware(...middlwares))
);

export default rootStore;
