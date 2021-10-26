import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
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
      url: "http://localhost:4000/users/login",
    }).then((res) => {
      if (res.data === "Successfully Authenticated") {
        console.log("res.data");
        history.push("/user-panel");
      } else {
        console.log(res.data);
      }
    });
  };

  return (
    <div className="form-setup">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicLoginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={onChangeLoginUsername} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onChangeloginPassword} />
        </Form.Group>

        <Button variant="success" onClick={login}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
