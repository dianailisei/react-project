import React, { useState, useEffect } from "react";
import "../css/Modal.css";
import { connect } from "react-redux";
import * as contactActions from "../redux/actions/contactActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const SearchBar = ({ actions }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeOutId =
      !!searchTerm &&
      setTimeout(() => actions.loadContacts({ firstName: searchTerm }), 3000);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search a contact"
        aria-label="Search a contact"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => actions.loadContacts({ firstName: searchTerm })}
        >
          Search
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  //   contacts: PropTypes.object.isRequired,
  //   contactIds: PropTypes.array.isRequired,
  //   filteredContacts: PropTypes.array.isRequired,
  // showEvenContactIds: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    // contacts: state.response.contacts,
    // filteredContacts: state.contactsData.filteredContacts,
    // contactIds: state.contacts.contactIds,
    // showEvenContactIds: state.contacts.showEvenContactIds,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
