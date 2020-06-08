import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { Button } from "react-bootstrap";
import { BASE_URL, headers, DELETE } from "../../constants/Api";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteEnquiry(props) {
  const history = useHistory();

  function checkDelete() {
    confirmAlert({
      title: "Are you sure you want to delete this enquiry",
      buttons: [
        {
          label: "yes",
          onClick: () => DeleteEnquiry(),
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function DeleteEnquiry() {
    const url = BASE_URL + "enquiries/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/hotels");
  }

  return (
    <Button className="enquiriesItem__button--delete" onClick={checkDelete}>
      Delete
    </Button>
  );
}

DeleteEnquiry.propTypes = {
  props: PropTypes.func.isRequired,
};

export default DeleteEnquiry;
