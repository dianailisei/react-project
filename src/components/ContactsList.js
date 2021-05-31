import React, { useState } from "react";
import "../css/Modal.css";
import { Table } from "react-bootstrap";
import ModalC from "./ModalC";

const ContactsList = ({ filteredContacts }) => {
  const [openModalC, setOpenModalC] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openContactDetails = (contact) => {
    setSelectedContact(contact);
    setOpenModalC(true);
  };
  return (
    <Table striped bordered>
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
            <tr key={contact.id} onClick={() => openContactDetails(contact)}>
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

export default ContactsList;
