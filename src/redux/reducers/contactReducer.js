import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_CONTACTS_SUCCESS:
      let filteredContacts = [];
      for (const [key, value] of Object.entries(action.response.contacts)) {
        filteredContacts.push(value);
      }
      return {
        ...state,
        contacts: { ...state.contacts, ...action.response.contacts },
        contactIds: [...state.contactIds, ...action.response.contacts_ids],
        filteredContacts: [...state.filteredContacts, ...filteredContacts],
      };
    case actionTypes.SORT_ONLY_EVEN_CONTACT_IDS:
      return {
        ...state,
        filteredContacts: action.filteredContacts,
        showEvenContactIds: action.showEvenContactIds,
      };
    default:
      return state;
  }
}
