import React, { useEffect } from "react";
import "../css/style.css";
import { Button, Modal, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as contactActions from "../redux/actions/contactActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ContactsList from "./ContactsList";
import SearchBar from "./SearchBar";
import { Scrollbars } from "react-custom-scrollbars";

const ModalA = ({ showEvenContactIds, actions, location }) => {
  const { state = {} } = location;
  const { modal } = state;

  const queryParams = { page: 1 };
  useEffect(() => {
    actions.filterContacts(queryParams);
  });

  const handleScrollFrame = (values) => {
    if (values.top === 1) {
      queryParams.page += 1;
      actions.loadMoreContacts({ ...queryParams });
    }
  };

  return (
    <Modal show={modal} onHide={() => {}}>
      <Modal.Header>Modal A</Modal.Header>
      <Modal.Body>
        <div className="buttons-container">
          <Link to={{ pathname: "/modalA", state: { modal: true } }}>
            <Button className="all-contacts-button">All Contacts</Button>
          </Link>
          <Link to={{ pathname: "/modalB", state: { modal: true } }}>
            <Button className="us-contacts-button">US Contacts</Button>
          </Link>
          <Link to="/">
            <Button>Close</Button>
          </Link>
        </div>
        <SearchBar queryParams={queryParams} />
        <Scrollbars
          style={{ width: 450, height: 600 }}
          onScrollFrame={handleScrollFrame}
        >
          <ContactsList />
        </Scrollbars>
      </Modal.Body>
      <Modal.Footer>
        <FormCheck
          type="checkbox"
          label="Only even"
          className="footerCheckBox"
          value={!!showEvenContactIds}
          onChange={(event) => {
            actions.sortOnlyEvenContactIds(event.target.checked);
          }}
        ></FormCheck>
      </Modal.Footer>
    </Modal>
  );
};

ModalA.propTypes = {
  showEvenContactIds: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    showEvenContactIds: state.contactsData.showEvenContactIds,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalA);
