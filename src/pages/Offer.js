import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { EntypoStar } from "react-entypo";
import Medal from "../img/medal.png";
import Vegan from "../img/Vegan.svg";
import Avion from "../img/avion.svg";
import Star from "../img/star.svg";
import Crayon from "../img/crayon.svg";
import Share from "../img/share.svg";
import Map from "../components/Map";
import House from "../img/house.svg";
import Horloge from "../img/horloge.svg";
import Telephone from "../img/telephone.svg";
import Location from "../img/location.svg";
import CrayonBlanc from "../img/crayonBlanc.svg";
import CameraBlanc from "../img/cameraBlanc.svg";
import CrochetNoir from "../img/crochetNoir.svg";
import FacebookNoir from "../img/facebookNoir.svg";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
      );

      var data = "";
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].placeId == id) {
          data = response.data[i];
          break;
        }
      }

      setData(data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  const generateStars = (numberOfStars) => {
    let starsArrays = [];
    for (let i = 0; i < 5; i++) {
      if (i < numberOfStars) {
        starsArrays.push(
          <EntypoStar name="star" size={22} color="#DAA520" key={i} />
        );
      } else {
        starsArrays.push(
          <EntypoStar name="star" size={22} color="grey" key={i}></EntypoStar>
        );
      }
    }
    return starsArrays;
  };
  return isLoading ? (
    <p>En cours de chargement</p>
  ) : (
    <div>
      <div className="container grandEnsembleBande">
        <div>
          <div className="nameRestaus">{data.name}</div>
          <div className="petitEnsembleBande">
            <div className="boxMedal">
              <img className="imageMedal" src={Medal} alt="" />
              <span className="spanMedal">Friend</span>
            </div>
            <div className="boxVegan">
              <img className="imageVegan" src={Vegan} alt="vegan" />
              <span className="spanMedal">Vegan</span>
            </div>
            <div>{generateStars(data.rating)}</div>
          </div>
        </div>
        <div className="petitEnsembleBande">
          <div className="boxesDroite">
            <img className="svgDroite" src={Crayon} alt="crayon" />
            <span className="spanDroite">Update</span>
          </div>
          <div className="boxesDroite">
            <img className="svgDroite" src={Star} alt="star" />
            <span className="spanDroite">Favorite</span>
          </div>
          <div className="boxesDroite">
            <img className="svgDroite" src={Avion} alt="avion" />
            <span className="spanDroite">Trip</span>
          </div>
          <div className="boxesDroite">
            <img className="svgDroite" src={Share} alt="share" />
            <span className="spanDroite">Share</span>
          </div>
        </div>
      </div>
      <div className="display container">
        <div className="ensembleBoxesGauche container">
          <div className="boxHouse">
            <img className="imgHouse" src={House} alt="house" />
            <div>{data.address}</div>
          </div>
          <div className="boxesHorlogeTelephoneLocation">
            <div className="boxhorloge">
              <div>
                <img className="imgHorloge" src={Horloge} alt="" />
              </div>
              <div className="boxhorloge2">
                <span className="spanHorloge">CLOSED NOW</span>
                <span className="span2horloge">11:00 : 22:30</span>
                <span className="span3horloge">More hours</span>
              </div>
            </div>
            <div className="boxTelephone">
              <div>
                <img src={Telephone} alt="telephone" />
              </div>
              <div>
                <div>{data.phone}</div>
              </div>
            </div>
            <div className="boxLocation">
              <div>
                <img src={Location} alt="" />
              </div>
              <div>{data.address}</div>
            </div>
          </div>
          <div className="boxDescription">{data.description}</div>
          <div className="boxCategorie">
            <span className="spanCategories">Categories:</span>
            <div>{data.type}</div>
          </div>
          <div className="boxButtonsAdd">
            <button className="buttonAdds">
              <img src={CrayonBlanc} alt="" />
              <span className="spanButtons">Add Review</span>
            </button>
            <button className="buttonAdds">
              <img src={CameraBlanc} alt="" />
              <span className="spanButtons">Add picture</span>
            </button>
          </div>
          <div className="boxFoodPictures">
            {data.pictures.map((item, index) => {
              return (
                <div key={index}>
                  <img className="imgFoodPictures" src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="boxMap">
            <Map data={data}></Map>
          </div>
          <div className="boxSousMap">
            <div>
              <span className="spanWebsite">Website</span>
            </div>
            <div>
              <div className="display margin">
                <img className="imgBoxSites" src={CrochetNoir} alt="" />
                <div>vegami.com</div>
              </div>
              <div className="display">
                <img className="imgBoxSites" src={FacebookNoir} alt="" />
                <div>facebook.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
