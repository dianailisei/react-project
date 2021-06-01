import { combineReducers } from "redux";
import contactsData from "./contactReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  contactsData,
  routing: routerReducer,
});

export default rootReducer;
