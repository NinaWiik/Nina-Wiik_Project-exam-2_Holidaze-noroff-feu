import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { IoMdLogOut } from "react-icons/io";

function Logout() {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  function doLogout() {
    logout();
    history.push("/");
  }

  return (
    <Button className="logout__button" onClick={doLogout}>
      <IoMdLogOut />
      Log out
    </Button>
  );
}

export default Logout;
