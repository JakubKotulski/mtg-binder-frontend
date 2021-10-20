import { useState, useEffect } from "react";
import "./LastSoldCard.css";

const LastSoldCard = () => {
  useEffect(() => {
    fetchCards();
  }, []);

  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const data = await fetch("http://localhost:4000/cards");

    const cards = await data.json();
    console.log("data: ",data)
    console.log("cards ",cards)
    setCards(cards);
  };

  console.log("cards after fetch ",cards)
  return (
    <>
      {cards.map((card) => (
        <div key={card._id} className="single-card custom">
          <img className="added-card" src={card.url} alt="card" />
          <p className="card-data">{card.name}</p>
          <p className="card-data">Price: {card.price}</p>
        </div>
      ))}
    </>
  );
};

export default LastSoldCard;
