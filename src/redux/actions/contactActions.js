import * as actionTypes from "./actionTypes";
import { getContacts } from "../../services/contactService";

const loadMoreContactsSuccess = (response) => {
  return { type: actionTypes.LOAD_MORE_CONTACTS_SUCCESS, response };
};

export function loadMoreContacts(payload) {
  return function (dispatch) {
    return getContacts(payload)
      .then((response) => {
        let filteredContacts = [];
        for (const [key, value] of Object.entries(response.data.contacts)) {
          filteredContacts.push(value);
        }
        dispatch(
          loadMoreContactsSuccess({ ...response.data, filteredContacts })
        );
      })
      .catch((error) => alert(error));
  };
}

const filterContactsSuccess = (response) => {
  return { type: actionTypes.FILTER_CONTACTS_SUCCESS, response };
};

export function filterContacts(payload) {
  return function (dispatch) {
    return getContacts(payload)
      .then((response) => {
        let filteredContacts = [];
        for (const [key, value] of Object.entries(response.data.contacts)) {
          filteredContacts.push(value);
        }
        dispatch(filterContactsSuccess({ ...response.data, filteredContacts }));
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
