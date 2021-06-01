import * as actionTypes from "./actionTypes";
import { getContacts } from "../../services/contactService";

const loadContactsSuccess = (response) => {
  return { type: actionTypes.LOAD_CONTACTS_SUCCESS, response };
};

export function loadContacts(payload) {
  return function (dispatch) {
    return getContacts(payload)
      .then((response) => {
        dispatch(loadContactsSuccess(response.data));
      })
      .catch((error) => alert(error));
  };
}

export function sortOnlyEvenContactIds(showEvenContactIds) {
  return function (dispatch, getState) {
    const currentState = getState();
    const evenContactIds = showEvenContactIds
      ? currentState.contactsData.contactIds.filter((id) => id % 2 === 0)
      : currentState.contactsData.contactIds;
    let filteredContacts = [];
    if (evenContactIds !== undefined) {
      for (const [key, value] of Object.entries(
        currentState.contactsData.contacts
      )) {
        if (evenContactIds.includes(parseInt(key))) {
          filteredContacts.push(value);
        }
      }
    }
    dispatch({
      type: actionTypes.SORT_ONLY_EVEN_CONTACT_IDS,
      filteredContacts,
      showEvenContactIds,
    });
  };
}
