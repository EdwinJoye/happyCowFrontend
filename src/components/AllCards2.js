import { Link } from "react-router-dom";
import { EntypoStar } from "react-entypo";

const AllCards2 = ({ item }) => {
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

  return (
    <div>
      <Link to={`/offer/${item.placeId}`}>
        <div className="cardBoxe2">
          <img className="cardPicture2" src={item.thumbnail} alt="" />
          <div>{item.name}</div>
          <div className="cardName2"> {item.address}</div>
          <div>{generateStars(item.rating)}</div>
          <div>
            <div> {item.rating}</div>
            <div></div>
          </div>
          <div className="cardDescription2">{item.description}</div>
        </div>
        {/* <img src={item.pictures[1]}></img> */}
      </Link>
    </div>
  );
};
export default AllCards2;
