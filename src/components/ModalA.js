import React, { useEffect, useState } from "react";
import "../css/Modal.css";
import { Button, Modal, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as contactActions from "../redux/actions/contactActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ContactsList from "./ContactsList";

const ModalA = ({ contacts, actions, location }) => {
  const { state = {} } = location;
  const { modal } = state;
  const [showEvenContactIds, setShowEvenContactIds] = useState(false);

  useEffect(() => {
    contacts.contacts_ids === undefined && actions.loadAllContacts({ page: 1 });
  }, []);

  const getFilteredContacts = () => {
    const contactIds = showEvenContactIds
      ? contacts.contacts_ids.filter((id) => id % 2 === 0)
      : contacts.contacts_ids;
    let filteredContacts = [];
    if (contactIds !== undefined) {
      for (const [key, value] of Object.entries(contacts.contacts)) {
        if (contactIds.includes(parseInt(key))) {
          filteredContacts.push(value);
        }
      }
    }

    return filteredContacts;
  };

  return (
    <Modal show={modal}>
      <Modal.Header>Modal A</Modal.Header>
      <Modal.Body>
        <Link to={{ pathname: "/modalA", state: { modal: true } }}>
          <Button>All Contacts</Button>
        </Link>
        <Link to={{ pathname: "/modalB", state: { modal: true } }}>
          <Button>US Contacts</Button>
        </Link>
        <Link to="/">
          <Button>Close</Button>
        </Link>
        <ContactsList filteredContacts={getFilteredContacts()} />
      </Modal.Body>
      <Modal.Footer>
        <FormCheck
          type="checkbox"
          label="Only even"
          className="footerCheckBox"
          value={showEvenContactIds}
          onChange={(event) => setShowEvenContactIds(event.target.checked)}
        ></FormCheck>
      </Modal.Footer>
    </Modal>
  );
};

ModalA.propTypes = {
  contacts: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalA);
