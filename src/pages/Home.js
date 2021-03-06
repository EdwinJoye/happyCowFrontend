import AllCards from "../components/AllCards";
import Search2 from "../img/glass2.svg";
import FlecheDroite from "../img/flecheDroite.svg";
import { Link } from "react-router-dom";

const Home = ({ setSearchBar, dataFiltered, isLoading }) => {
  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      <div className="ensemblePhotoSearch">
        <div className="blocTitreSearch">
          <h1>Find Vegan Restaurant Nearby</h1>
          <div className="ensembleSearchButton">
            <input
              className="inputSearchBanner"
              type="text"
              placeholder="Search for city, region or Zip code"
              onChange={(event) => {
                setSearchBar(event.target.value);
              }}
            />
            <button className="bannerButton">
              <img src={Search2} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="h2Button">
          <h2>Vegan Food Near Me</h2>
          <Link className="buttonViewAllFleche" to="/viewAll">
            <button className="buttonViewAll">View all</button>
            <img src={FlecheDroite} alt="" />
          </Link>
        </div>
        <div className="allCards">
          {dataFiltered.map((item, index) => {
            return (
              <div key={index}>
                <AllCards item={item} key={index}></AllCards>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default Home;
