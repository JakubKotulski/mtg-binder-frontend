import "./MainPage.css";
import LastSoldCard from "../LastSoldCard/LastSoldCard";
import { useState, useEffect } from "react";
import CardsGaleryMainPage from "../CardsGaleryMainPage/CardsGaleryMainPage";

const MainPage = () => {
  useEffect(() => {
    fetchCards();
  }, []);

  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const data = await fetch("http://localhost:4000/cards");

    const cards = await data.json();
    console.log("data: ", data);
    console.log("cards ", cards);
    setCards(cards);
  };
  return (
    <div className="sold-card-box">
      <h3>Last Sold Cards</h3>
      <div className="overflow-box">
        <LastSoldCard cards={cards}/>
      </div>
      <div className="custom-padding">
        <h3>Here you can see all cards on the web</h3>
        <CardsGaleryMainPage cards={cards}/>
      </div>
    </div>
  );
};

export default MainPage;
