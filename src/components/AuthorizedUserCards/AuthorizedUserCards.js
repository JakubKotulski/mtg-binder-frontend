import { Row, Col, Table, Button } from "react-bootstrap";
import "./AuthorizedUserCards.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { backendUrl } from "../../config";

const AuthorizedUserCards = ({ cards }) => {
  const markAsSold = (id) => {
    axios({
      method: "PATCH",
      withCredentials: true,
      url: `${backendUrl}/cards/${id}/sold`,
    });
  };

  return (
    <Row>
      <Col className="margin-custom">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="responsive-none">Nr</th>
              <th className="responsive-none">Name</th>
              <th className="responsive-none">Price</th>
              <th className="responsive-table-header">Card</th>
              <th className="responsive-none">Options</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card, index) => (
              <tr key={card._id}>
                <td className="responsive-none"> {index + 1} </td>
                <td className="responsive-none"> {card.name} </td>
                <td className="responsive-none"> {card.price} </td>
                <td>
                  {" "}
                  <img className="custom-width-user-s-card" src={card.url} alt="img" />{" "}
                  <div className="responsive-show">
                    <Button
                      className="option-buttons-box"
                      variant="outline-light"
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
                  </div>
                </td>
                <td className="responsive-none">
                  <Button
                    className="option-buttons-box"
                    variant="outline-light"
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
