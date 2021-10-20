import "./MainPage.css";
import LastSoldCard from "../LastSoldCard/LastSoldCard";

const MainPage = () => {
  return (
    <div className="sold-card-box">
      <h3>Last Sold Cards</h3>
      <div className="overflow-box">
        <LastSoldCard />
      </div>
    </div>
  );
};

export default MainPage;
