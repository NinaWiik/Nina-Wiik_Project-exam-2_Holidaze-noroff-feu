import React from "react";
import PropTypes from "prop-types";

function ErrorMessage({ children }) {
  return <div className="errorMessage">{children}</div>;
}

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorMessage;
