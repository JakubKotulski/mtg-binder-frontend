import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";

const ChangeUserDataPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");
  const history = useHistory();

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeSurname = (event) => {
    setSurname(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const getUser = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me",
    }).then((res) => {
      if (!res.data.username) {
        history.push("/");
      }
    });
  }, [history]);

  const fetchMe = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/users/me",
    }).then((res) => {
      setName(res.data.name);
      setSurname(res.data.surname);
      setPhone(res.data.phoneNumber);
      setId(res.data._id);
    });
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const saveChanges = () => {
    axios({
      method: "PUT",
      data: {
        name: name,
        surname: surname,
        phoneNumber: phone,
        _id: id,
      },
      withCredentials: true,
      url: `http://localhost:4000/users/update`,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="card-update-box">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={onChangeName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserSurname">
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" value={surname} onChange={onChangeSurname} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserPhoneNumber">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" value={phone} onChange={onChangePhone} />
        </Form.Group>

        <Button variant="warning" type="submit" onClick={saveChanges}>
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default ChangeUserDataPage;
