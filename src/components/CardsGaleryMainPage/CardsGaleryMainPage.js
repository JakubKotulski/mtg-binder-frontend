import { useState } from "react";
import "./CardsGaleryMainPage.css";
import CardModal from "../CardModal/CardModal";

const CardsGaleryMainPage = ({ cards }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const onHide = () => {
    setModalStatus(false);
  };

  return (
    <div className="container-fluid card-galery">
      {cards.map((card) => (
        <div
          key={card._id}
          className="galery-single-box"
          onClick={() => {
            setSelectedCard(card);
            setModalStatus(true);
          }}
        >
          <img src={card.url} alt="card from main page" />
          <p>{card.name}</p>
        </div>
      ))}
      {modalStatus && <CardModal onHide={onHide} showModal={modalStatus} card={selectedCard} />}
    </div>
  );
};

export default CardsGaleryMainPage;
