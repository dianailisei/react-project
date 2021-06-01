import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialReducerState = { contactsData: {} };
export const store = createStore(
  rootReducer,
  initialReducerState,
  composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
);

export const history = syncHistoryWithStore(browserHistory, store);
