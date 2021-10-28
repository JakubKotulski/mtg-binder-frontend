import "./CardUpdatePage.css";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";

const CardUpdatePage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [card, setCard] = useState([]);

  const [cardName, setCardName] = useState("");
  const [cardPrice, setCardPrice] = useState();
  const [cardUrl, setCardUrl] = useState("");

  const onChangeName = (event) => {
    setCardName(event.target.value);
  };

  const onChangePrice = (event) => {
    setCardPrice(event.target.value);
  };

  const onChangeUrl = (event) => {
    setCardUrl(event.target.value);
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

  const fetchCardDataToUpdate = useCallback(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:4000/cards/${id}`,
    }).then((res) => {
      setCard(res.data);
      setCardName(res.data.name);
      setCardPrice(res.data.price);
      setCardUrl(res.data.url);
    });
  }, [id]);

  useEffect(() => {
    fetchCardDataToUpdate();
  }, [fetchCardDataToUpdate]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const saveChanges = () => {
    axios({
      method: "PUT",
      data: {
        name: cardName,
        price: cardPrice,
        url: cardUrl,
      },
      withCredentials: true,
      url: `http://localhost:4000/cards/${id}`,
    }).then((res) => {
      setCard(res.data);
    });
  };

  return (
    <div className="card-update-box">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCardName">
          <Form.Label>Card Name</Form.Label>
          <Form.Control type="text" value={cardName} onChange={onChangeName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCardPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={cardPrice} onChange={onChangePrice} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCArdUrl">
          <Form.Label>Url</Form.Label>
          <Form.Control type="text" value={cardUrl} onChange={onChangeUrl} />
        </Form.Group>

        <Button variant="warning" type="submit" onClick={saveChanges}>
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default CardUpdatePage;
