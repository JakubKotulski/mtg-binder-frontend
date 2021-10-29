import "./MainPage.css";
import { useState, useEffect } from "react";
import CardsGaleryMainPage from "../CardsGaleryMainPage/CardsGaleryMainPage";
import { backendUrl } from "../../../config";

const MainPage = () => {
  useEffect(() => {
    fetchCards();
  }, []);

  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const data = await fetch(`${backendUrl}/cards`);

    const cards = await data.json();
    setCards(cards);
  };

  return (
    <div className="sold-card-box">
      <div className="custom-padding">
        <h3>Here you can see all avaliable cards</h3>
        <CardsGaleryMainPage cards={cards} />
      </div>
    </div>
  );
};

export default MainPage;
