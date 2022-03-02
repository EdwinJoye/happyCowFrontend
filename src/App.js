import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import LogInSignUp from "./pages/LogInSignUp";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route
          path="/LogInSignUp"
          element={<LogInSignUp></LogInSignUp>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
