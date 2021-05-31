import * as actionTypes from "./actionTypes";
import { getAllContacts } from "../../services/contactService";

const loadAllContactsSuccess = (contacts) => {
  return { type: actionTypes.LOAD_ALL_CONTACTS_SUCCESS, contacts };
};

export function loadAllContacts(payload) {
  return function (dispatch) {
    return getAllContacts(payload)
      .then((response) => {
        dispatch(loadAllContactsSuccess(response.data));
      })
      .catch((error) => alert(error));
  };
}
