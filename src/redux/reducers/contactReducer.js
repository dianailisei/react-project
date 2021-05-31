import * as actionTypes from "../actions/actionTypes";

export default function contactReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_ALL_CONTACTS_SUCCESS:
      return action.contacts;
    default:
      return state;
  }
}
