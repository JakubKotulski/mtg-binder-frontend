import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AuthorizedUserCards from "../AuthorizedUserCards/AuthorizedUserCards";
import AddCardForm from "../AddCardForm/AddCardForm";
import "./UserPanel.css";

const UserPanel = () => {
  const history = useHistory();
  const [cards, setCards] = useState([]);

  const getUser = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      if (res.data.username === null) {
        history.push("/");
      } else {
        console.log(res);
      }
    });
  }, [history]);

  const fetchCards = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/logged-user-cards",
    }).then((res) => {
      console.log(res.data);
      setCards(res.data);
    });
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Container fluid="md">
      <Row>
        <Col className="header-flex-custom">
          <h3>Your Binder</h3>
        </Col>
      </Row>
      <AuthorizedUserCards cards={cards} />
      <AddCardForm />
    </Container>
  );
};

export default UserPanel;
