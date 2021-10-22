import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const SignupForm = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const onChangeSignupUsername = (event) => {
    setSignupUsername(event.target.value);
  };

  const onChangeSignupPassword = (event) => {
    setSignupPassword(event.target.value);
  };

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: signupUsername,
        password: signupPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/users",
    }).then((res) => console.log(res));
  };
  return (
    <div>
      <form className="custom-form">
        <input placeholder="Username" onChange={onChangeSignupUsername} />
        <input placeholder="Password" onChange={onChangeSignupPassword} />
        <Button variant="success" onClick={register}>
          {" "}
          Sign up{" "}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
