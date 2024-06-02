import { applyMiddleware, legacy_createStore as createStore } from "redux";
// import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const initialState = {};
const meddlewere = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...meddlewere))
);

export default store;
