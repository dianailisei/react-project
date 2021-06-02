import React, { useState, useEffect } from "react";
import "../css/style.css";
import { connect } from "react-redux";
import * as contactActions from "../redux/actions/contactActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const SearchBar = ({ actions, queryParams }) => {
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const timeOutId =
      searchTerm !== undefined && setTimeout(() => searchContacts(), 500);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  const searchContacts = () => {
    !!searchTerm
      ? actions.filterContacts({ ...queryParams, query: searchTerm })
      : actions.filterContacts({ ...queryParams });
  };

  return (
    <div className="input-group mb-3 searchbar">
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
          onClick={() => searchContacts()}
        >
          Search
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contactActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
