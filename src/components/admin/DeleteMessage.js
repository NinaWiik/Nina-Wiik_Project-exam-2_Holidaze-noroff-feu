import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { Button } from "react-bootstrap";
import { BASE_URL, headers, DELETE } from "../../constants/Api";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteMessage(props) {
  const history = useHistory();

  function checkDelete() {
    confirmAlert({
      title: "Are you sure you want to delete this message?",
      buttons: [
        {
          label: "yes",
          onClick: () => DeleteMessage(),
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function DeleteMessage() {
    const url = BASE_URL + "contacts/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/hotels");
  }

  return (
    <Button className="messageItem__button--delete" onClick={checkDelete}>
      Delete
    </Button>
  );
}

DeleteMessage.propTypes = {
  props: PropTypes.func.isRequired,
};

export default DeleteMessage;
