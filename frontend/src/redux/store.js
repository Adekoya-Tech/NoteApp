import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
