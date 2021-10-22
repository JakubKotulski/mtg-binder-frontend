import { Form, Button, Row, Col } from "react-bootstrap";

const AddCardForm = () => {
  return (
    <Row>
      <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Card Name</Form.Label>
            <Form.Control type="text" placeholder="Card Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUrl">
            <Form.Label>Card Url</Form.Label>
            <Form.Control type="text" placeholder="Card Url" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserSurname">
            <Form.Label>Your Surname</Form.Label>
            <Form.Control type="text" placeholder="YourSurname" />
          </Form.Group>

          <Button variant="success" type="submit">
            Add Card
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default AddCardForm;
