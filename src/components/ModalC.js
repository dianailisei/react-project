import React from "react";
import { Modal, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalC = ({ contact, show }) => {
  return (
    <Modal show={show}>
      <Modal.Header>Modal C</Modal.Header>
      <Modal.Body>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{contact.id}</td>
              <td>{contact.first_name || "-"}</td>
              <td>{contact.last_name || "-"}</td>
              <td>{contact.email || "-"}</td>
              <td>{contact.phone_number || "-"}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button>Close</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalC;
