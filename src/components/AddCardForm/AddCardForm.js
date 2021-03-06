import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./AddCardForm.css";
import { backendUrl } from "../../config";

const AddCardForm = () => {
  const [cardName, setCardName] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [cardUrl, setCardUrl] = useState("");

  const onChangeCardName = (event) => {
    setCardName(event.target.value);
  };

  const onChangeCardPrice = (event) => {
    setCardPrice(event.target.value);
  };

  const onChangeCardUrl = (event) => {
    setCardUrl(event.target.value);
  };

  const addCard = () => {
    axios({
      method: "POST",
      data: {
        name: cardName,
        price: cardPrice,
        url: cardUrl,
      },
      withCredentials: true,
      url: `${backendUrl}/cards`,
    })
  };

  return (
    <Row className="add-cards-box-padding">
      <h3 className="h3-header"> Here you can add new cards to your collection </h3>
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

          <Button variant="success" type="submit" onClick={addCard}>
            Add Card
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddCardForm;
