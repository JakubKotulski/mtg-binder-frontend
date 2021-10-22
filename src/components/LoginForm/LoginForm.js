import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

const LoginForm = () => {
  const history = useHistory();
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onChangeLoginUsername = (event) => {
    setLoginUsername(event.target.value);
  };

  const onChangeloginPassword = (event) => {
    setLoginPassword(event.target.value);
  };

  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      if (res.data === "Successfully Authenticated") {
        history.push("/user-panel");
      } else {
        console.log(res.data);
      }
    });
  };


  return (
    <div>
      <form className="custom-form">
        <input placeholder="Username" onChange={onChangeLoginUsername} />
        <input placeholder="Password" onChange={onChangeloginPassword} />
        <Button variant="success" onClick={login}>
          {" "}
          Login{" "}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
