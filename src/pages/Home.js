import { useState, useEffect } from "react";
import axios from "axios";
import AllCards from "../components/AllCards";
import Search2 from "../img/glass2.svg";
import FlecheDroite from "../img/flecheDroite.svg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);

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
          <div className="buttonViewAllFleche">
            <button className="buttonViewAll">View all</button>
            <img src={FlecheDroite} alt="" />
          </div>
        </div>
        <div className="allCards">
          {data.map((item, index) => {
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
