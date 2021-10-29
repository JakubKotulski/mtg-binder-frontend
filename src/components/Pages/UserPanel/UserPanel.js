import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import AuthorizedUserCards from "../../AuthorizedUserCards/AuthorizedUserCards";
import AddCardForm from "../../AddCardForm/AddCardForm";
import "./UserPanel.css";
import { backendUrl } from "../../../config";

const UserPanel = () => {
  const history = useHistory();
  const [cards, setCards] = useState([]);

  const getUser = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${backendUrl}/users/me`,
    }).then((res) => {
      if (!res.data.username) {
        history.push("/");
      }
    });
  }, [history]);

  const fetchCards = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${backendUrl}/cards/my`,
    }).then((res) => {
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
          <h3 className="h3-header">Your Binder</h3>
        </Col>
      </Row>
      <AuthorizedUserCards cards={cards} />
      <AddCardForm />
    </Container>
  );
};

export default UserPanel;
