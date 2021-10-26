import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import ActionInfo from "../ActionInfo/ActionInfo";

const SignupForm = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupSurname, setSignupSurname] = useState("");
  const [signupPhoneNumber, setSignupPhoneNumber] = useState("");
  const [success, setSuccess] = useState(false);

  const onChangeSignupUsername = (event) => {
    setSignupUsername(event.target.value);
  };

  const onChangeSignupPassword = (event) => {
    setSignupPassword(event.target.value);
  };

  const onChangeSignupName = (event) => {
    setSignupName(event.target.value);
  };

  const onChangeSignupSurname = (event) => {
    setSignupSurname(event.target.value);
  };

  const onChangeSignupPhoneNumber = (event) => {
    setSignupPhoneNumber(event.target.value);
  };

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: signupUsername,
        password: signupPassword,
        name: signupName,
        surname: signupSurname,
        phoneNumber: signupPhoneNumber,
      },
      withCredentials: true,
      url: "http://localhost:4000/users",
    }).then(() => {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 10000);
    });
  };

  return (
    <div className="form-setup">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={onChangeSignupName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" placeholder="Surname" onChange={onChangeSignupSurname} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSignupUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={onChangeSignupUsername} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSignupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onChangeSignupPassword} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone number" onChange={onChangeSignupPhoneNumber} />
        </Form.Group>

        <Button variant="success" onClick={register}>
          Submit
        </Button>

        {success && <ActionInfo message="Successfully signed up" />}
      </Form>
    </div>
  );
};

export default SignupForm;
