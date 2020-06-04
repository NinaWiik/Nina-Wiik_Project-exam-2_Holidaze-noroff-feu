import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";

function Login() {
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    function doLogout() {
        logout();
        history.push("/");
    }

    return <Button className="logout__button" onClick={doLogout}>Log out</Button>;
}

export default Login;