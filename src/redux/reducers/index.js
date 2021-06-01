import { combineReducers } from "redux";
import contactsData from "./contactReducer";

const rootReducer = combineReducers({
  contactsData,
});

export default rootReducer;
