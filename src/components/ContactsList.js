import React, { useState } from "react";
import "../css/Modal.css";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ModalC from "./ModalC";

const ContactsList = ({ filteredContacts }) => {
  const [openModalC, setOpenModalC] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openContactDetails = (contact) => {
    setSelectedContact(contact);
    setOpenModalC(true);
  };

  return (
    <Table striped style={{ width: 450 }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Country Id</th>
        </tr>
      </thead>
      <tbody>
        {!!filteredContacts &&
          filteredContacts.map((contact) => (
            <tr key={Math.random()} onClick={() => openContactDetails(contact)}>
              <td>{contact.id}</td>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.country_id}</td>
            </tr>
          ))}
      </tbody>
      {openModalC && <ModalC contact={selectedContact} show={openModalC} />}
    </Table>
  );
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    filteredContacts: state.contactsData.filteredContacts,
  };
}

export default connect(mapStateToProps)(ContactsList);
