import { Row, Col, Table } from "react-bootstrap";

const AuthorizedUserCards = ({ cards }) => {
  return (
    <Row>
      <Col className="margin-custom">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nr</th>
              <th>Name</th>
              <th>Price</th>
              <th>Card</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={card._id}>
                <td> {index + 1} </td>
                <td> {card.name} </td>
                <td> {card.price} </td>
                <td> <img src={card.url} alt="img" /> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AuthorizedUserCards;
