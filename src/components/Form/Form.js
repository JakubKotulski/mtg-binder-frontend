import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./Form.css";

const Form = ({ signupForm, loginForm }) => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const onChangeSignupUsername = (event) => {
    setSignupUsername(event.target.value);
  };

  const onChangeSignupPassword = (event) => {
    setSignupPassword(event.target.value);
  };

  const onChangeLoginUsername = (event) => {
    setLoginUsername(event.target.value);
  };

  const onChangeloginPassword = (event) => {
    setLoginPassword(event.target.value);
  };

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: signupUsername,
        password: signupPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
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
        localStorage.setItem("token", res.data);
      } else {
        console.log(res.data);
      }
    });
  };

  return (
    <div>
      {signupForm && (
        <form className="custom-form">
          <input placeholder="Username" onChange={onChangeSignupUsername} />
          <input placeholder="Password" onChange={onChangeSignupPassword} />
          <Button variant="success" onClick={register}>
            {" "}
            Sign up{" "}
          </Button>
        </form>
      )}
      {loginForm && (
        <form className="custom-form">
          <input placeholder="Username" onChange={onChangeLoginUsername} />
          <input placeholder="Password" onChange={onChangeloginPassword} />
          <Button variant="success" onClick={login}>
            {" "}
            Login{" "}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Form;
