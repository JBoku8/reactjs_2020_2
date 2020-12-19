import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
  appPosts: postReducer,
  appCommon: commonReducer,
});

export default rootReducer;
