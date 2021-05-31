import "../css/Modal.css";
import { Button, Modal, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalA = ({ location }) => {
  const { state = {} } = location;
  const { modal } = state;

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
      </Modal.Body>
      <Modal.Footer>
        <FormCheck
          type="checkbox"
          label="Only even"
          className="footerCheckBox"
        ></FormCheck>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalA;
