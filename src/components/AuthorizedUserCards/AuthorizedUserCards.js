import { Row, Col, Table, Button } from "react-bootstrap";
import "./AuthorizedUserCards.css";
import axios from "axios";
import { Link} from "react-router-dom";

const AuthorizedUserCards = ({ cards }) => {
  

  const markAsSold = (id) => {
    axios({
      method: "PATCH",
      withCredentials: true,
      url: `http://localhost:4000/cards/${id}/sold`,
    }).then((res) => {
      console.log(res.data);
    });
  };

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
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={card._id}>
                <td> {index + 1} </td>
                <td> {card.name} </td>
                <td> {card.price} </td>
                <td>
                  {" "}
                  <img className="custom-width-user-s-card" src={card.url} alt="img" />{" "}
                </td>
                <td>
                  <Button
                    className="option-buttons-box"
                    variant="dark"
                    onClick={() => {
                      console.log(card._id);
                      markAsSold(card._id);
                    }}
                  >
                    Mark as sold
                  </Button>
                  <Link to={`/card-update/${card._id}`}>
                    <Button className="option-buttons-box" variant="warning">
                      Update details
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AuthorizedUserCards;
