import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search({ makeSearch }) {
  return (
    <InputGroup className="search__input">
      <FormControl
        placeholder="Search Hotel.."
        onChange={function (e) {
          makeSearch(e.target.value);
        }}
      />
    </InputGroup>
  );
}

Search.propTypes = {
  makeSearch: PropTypes.func.isRequired,
};

export default Search;
