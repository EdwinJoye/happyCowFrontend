import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/Signup";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
