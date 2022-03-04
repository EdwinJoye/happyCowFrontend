import { useState } from "react";
import AllCards2 from "../components/AllCards2";
import Search2 from "../img/glass2.svg";

const ViewAll = ({ setSearchBar, dataFiltered, isLoading }) => {
  const [page, setPage] = useState(1);

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
                console.log(event.target.value);
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
        </div>
        <div className="allCards2">
          {dataFiltered.map((item, index) => {
            return (
              <div key={index}>
                <AllCards2 item={item} key={index}></AllCards2>
              </div>
            );
          })}
          ;
        </div>
        <div className="boxButtonsPagePrécédenteSuivante">
          <button
            className="buttonPagePrécédenteSuivante"
            onClick={() => setPage(page - 1)}
          >
            Page précédente
          </button>
          <button
            className="buttonPagePrécédenteSuivante"
            onClick={() => setPage(page + 1)}
          >
            Page suivante
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
