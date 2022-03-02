import Google from "../img/google.svg";
import Facebook from "../img/facebook.svg";
import Apple from "../img/apple.svg";
import Eye from "../img/eye.svg";

const LogIn = () => {
  function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div>
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
        />
        <h5 className="titresInputs">Password</h5>
        <div className="boxPasswordEye">
          <input
            className="inputSignUpLogInPassword"
            type="password"
            placeholder="Password"
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
          value="Log In"
        ></input>
      </div>
    </div>
  );
};

export default LogIn;
