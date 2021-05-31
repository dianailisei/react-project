import React from "react";
import "../css/Modal.css";
import { Table } from "react-bootstrap";

const ContactsList = ({ filteredContacts }) => {
  return (
    <Table>
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
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.first_name}</td>
              <td>{contact.last_name}</td>
              <td>{contact.country_id}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ContactsList;
