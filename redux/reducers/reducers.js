import { combineReducers } from "redux";
import { authReducer } from "./userReducers";

const reducers = combineReducers({
  auth: authReducer,
});

export default reducers;
