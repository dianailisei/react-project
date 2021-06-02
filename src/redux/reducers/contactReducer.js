import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MORE_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: { ...state.contacts, ...action.response.contacts },
        contactIds: [...state.contactIds, ...action.response.contacts_ids],
        filteredContacts: [
          ...state.filteredContacts,
          ...action.response.filteredContacts,
        ],
      };

    case actionTypes.SORT_ONLY_EVEN_CONTACT_IDS:
      return {
        ...state,
        filteredContacts: action.filteredContacts,
        showEvenContactIds: action.showEvenContactIds,
      };

    case actionTypes.FILTER_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: { ...action.response.contacts },
        contactIds: [...action.response.contacts_ids],
        filteredContacts: [...action.response.filteredContacts],
      };

    default:
      return state;
  }
}
