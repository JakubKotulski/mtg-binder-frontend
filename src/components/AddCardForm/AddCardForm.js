import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";


const AddCardForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [cardUrl, setCardUrl] = useState("");
  const [cardOwnerName, setCardOwnerName] = useState("");
  const [cardOwnerSurname, setCardOwnerSurname] = useState("");
  const [cardOwnerPhoneNumber, setCardOwnerPhoneNumber] = useState("");

  const onChangeCardName = (event) => {
    setCardName(event.target.value);
  };

  const onChangeCardPrice = (event) => {
    setCardPrice(event.target.value);
  };

  const onChangeCardUrl = (event) => {
    setCardUrl(event.target.value);
  };

  const onChangeCardOwnerName = (event) => {
    setCardOwnerName(event.target.value);
  };

  const onChangeCardOwnerSurname = (event) => {
    setCardOwnerSurname(event.target.value);
  };

  const onChangeCardOwnerPhoneNumber = (event) => {
    setCardOwnerPhoneNumber(event.target.value);
  };

  const addCard = () => {
    axios({
      method: "POST",
      data: {
        name: cardName,
        price: cardPrice,
        url: cardUrl,
        ownerPhoneNumber: cardOwnerPhoneNumber,
        ownerName: cardOwnerName,
        cardOwnerSurname: cardOwnerSurname,
      },
      withCredentials: true,
      url: "http://localhost:4000/cards",
    }).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" placeholder="Card Name" onChange={onChangeCardName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" onChange={onChangeCardPrice} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>Card Url</Form.Label>
            <Form.Control type="text" placeholder="Card Url" onChange={onChangeCardUrl} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" onChange={onChangeCardOwnerPhoneNumber} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" onChange={onChangeCardOwnerName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserSurname">
            <Form.Label>Your Surname</Form.Label>
            <Form.Control type="text" placeholder="YourSurname" onChange={onChangeCardOwnerSurname} />
          </Form.Group>

          <Button variant="success" type="submit" onClick={addCard}>
            Add Card
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddCardForm;
