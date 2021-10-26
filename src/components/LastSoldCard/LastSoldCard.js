import "./LastSoldCard.css";

const LastSoldCard = ({ cards }) => {
  console.log("cards after fetch ", cards);
  return (
    <>
      {cards.map((card) => (
        <div key={card._id} className="single-card custom">
          <img className="added-card" src={card.url} alt="card" />
        </div>
      ))}
    </>
  );
};

export default LastSoldCard;
