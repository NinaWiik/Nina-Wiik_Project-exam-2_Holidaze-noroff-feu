import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../../constants/Api";

import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteHotel(props) {
  const history = useHistory();

  function checkDelete() {
    confirmAlert({
      title: "Are you sure you want to delete this accommodation?",
      buttons: [
        {
          label: "yes",
          className: "deleteHotel__button--delete",
          onClick: () => deleteHotel(),
        },
        {
          label: "no",
        },
      ],
    });
  }

  async function deleteHotel() {
    const url = BASE_URL + "establishments/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/hotels");
  }

  return (
    <Button variant="danger" onClick={checkDelete}>
      Delete
    </Button>
  );
}

DeleteHotel.propTypes = {
  props: PropTypes.func.isRequired,
};

export default DeleteHotel;
