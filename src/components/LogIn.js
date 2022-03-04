import Google from "../img/google.svg";
import Facebook from "../img/facebook.svg";
import Apple from "../img/apple.svg";
import Eye from "../img/eye.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3002/user/login", {
        email: email,
        password: password,
      });
      console.log(response);
      setUser(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      console.log(error.response);
      if (error.response.status === 400 || error.response.status === 401) {
        alert("Mauvais email et/ou mot de passe");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="boxLogos">
        <img className="imageLogos" src={Facebook} alt="facebook" />
        <img className="imageLogos" src={Apple} alt="apple" />
        <img className="imageLogos" src={Google} alt="google" />
      </div>
      <div className="boxSpanLines">
        <div className="lines"></div>
        <span className="span2">OR</span>
        <div className="lines"></div>
      </div>
      <div className="ensembleInputsTitles">
        <h4 className="titresInputs">Username or Email</h4>
        <input
          className="inputSignEmail"
          type="text"
          placeholder="Username or Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h5 className="titresInputs">Password</h5>
        <div className="boxPasswordEye">
          <input
            className="inputSignUpLogInPassword"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <img className="eye" src={Eye} alt="eye" />
        </div>
      </div>
      <div className="boxCheckbox">
        <div className="boxRememberMe">
          <input className="checkbox" type="checkbox" />
          <span>Remember me</span>
        </div>
        <div>
          <span className="spanPassword">Forgot password ?</span>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="inputLogInSignUp"
          type="submit"
          value="Log In"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LogIn;
