import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import loginState from "./reducers/loginState";

export default createStore(
  combineReducers({ loginState }),
  applyMiddleware(thunk)
);
