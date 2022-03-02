import Logo from "../img/logo.png";
import Search from "../img/glass.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="ensembleLogoButtons">
        <img
          className="logo"
          src={Logo}
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <button className="buttonHeader">Explore</button>
        <button className="buttonHeader">Contest</button>
        <button className="buttonHeader">Forum</button>
        <button className="buttonHeader">Blog</button>
        <button className="buttonHeader">Community</button>
        <button className="buttonHeader">The App</button>
        <button className="buttonHeader">Shop</button>
        <button className="buttonHeader">More</button>
      </div>
      <div className="ensembleSearchButtons">
        <img className="buttonSearch" src={Search} alt="" />
        <button className="buttonAddListing">Add listing</button>
        <Link to="LogInSignUp">
          <button className="buttonLoginJoin">Login / Join</button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
