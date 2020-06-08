import React from "react";
import PropTypes from "prop-types";

function ErrorMessageSub({ children }) {
  return <div className="errorMessageSub">{children}</div>;
}

ErrorMessageSub.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorMessageSub;
