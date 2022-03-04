import Google from "../img/google.svg";
import Facebook from "../img/facebook.svg";
import Apple from "../img/apple.svg";
import { useNavigate } from "react-router-dom";
import Eye from "../img/eye.svg";
import axios from "axios";
import { useState } from "react";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  // const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("http://localhost:3002/user/signup", {
        email: email,
        username: username,
        password: password,
      });
      alert("votre compte a bien été validé !");
      setUser(response.data.token);
      navigate("/");
      if (password !== confirmPassword) {
        alert("vos deux password ne sont pas identiques");
      } else {
        setStep(2);
      }
    } catch (error) {
      console.log("Signup Error ===> ", error.message);
      console.log("Catch error ===> ", error.response);
      if (error.response.status === 409) {
        alert("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div>
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
          <h4 className="titresInputs">Email</h4>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="inputSignEmail"
            value={email}
            type="email"
            placeholder="Email"
          />
          <h6 className="titresInputs">username</h6>
          <input
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            vallue={username}
            className="inputSignEmail"
            type="text"
            placeholder="username"
          />
          <h5 className="titresInputs">Password</h5>
          <div className="boxPasswordEye">
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              className="inputSignUpLogInPassword"
              type="password"
              placeholder="Password"
            />
            <img className="eye" src={Eye} alt="eye" />
          </div>
          <h5 className="titresInputs2">Confirm password</h5>
          <div className="boxPasswordEye">
            <input
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              value={confirmPassword}
              className="inputSignUpLogInConfirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            <img className="eye" src={Eye} alt="eye" />
          </div>
        </div>
        <div className="boxCheckbox">
          <div className="boxRememberMe">
            <input className="checkbox" type="checkbox" />{" "}
            <span>Remember me</span>
          </div>
          <div>
            <span className="spanPassword">Forgot password ?</span>
          </div>
        </div>
        <div>
          <input
            className="inputLogInSignUp"
            type="submit"
            value="Sign Up"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
