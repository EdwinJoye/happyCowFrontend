import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import { useState } from "react";
import CompteValide from "../components/CompteValide";

const LogInSignUp = ({ setUser }) => {
  const [stateOnglets, setStateOnglets] = useState(1);

  const goLogIn = () => {
    setStateOnglets(1);
  };
  const goSignUp = () => {
    setStateOnglets(2);
  };

  return (
    <div className="ensembeContainers">
      <div className="imageLogSign">
        <h3>Happy Cow</h3>
        <span className="span1">Welcome to happyCow</span>
      </div>
      <div className="ensembleOngletsContainer">
        <div className="contBtn">
          <div
            onClick={goLogIn}
            className={`onglets ${stateOnglets === 1 ? `active` : ``}`}
          >
            Log In
          </div>
          <div
            onClick={goSignUp}
            className={`onglets ${stateOnglets === 2 ? `active` : ``}`}
          >
            Sign Up
          </div>
        </div>

        <div className="containerOnglets">
          {stateOnglets === 1 ? (
            <LogIn setUser={setUser}></LogIn>
          ) : (
            <SignUp setUser={setUser}></SignUp>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogInSignUp;
