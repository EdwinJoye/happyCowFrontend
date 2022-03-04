import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import LogInSignUp from "./pages/LogInSignUp";
import ViewAll from "./pages/ViewAll";
import Cookies from "js-cookie";
import axios from "axios";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [searchBar, setSearchBar] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setUser = (token) => {
    console.log("SET USER ", token);
    if (token) {
      Cookies.set("userToken", token, { expires: 5 });
      // console.log(token);
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3002/restaurants`);
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);

  const dataFiltered = data.filter(
    (restaurant) =>
      searchBar === "" ||
      restaurant.name
        .toLocaleLowerCase()
        .includes(searchBar.toLocaleLowerCase()) ||
      restaurant.address
        .toLocaleLowerCase()
        .includes(searchBar.toLocaleLowerCase())
  );

  return (
    <Router>
      <Header token={token} setUser={setUser}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              dataFiltered={dataFiltered}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoading={isLoading}
            ></Home>
          }
        ></Route>
        <Route path="/offer/:id" element={<Offer></Offer>}></Route>
        <Route
          path="/loginsignup"
          element={<LogInSignUp setUser={setUser}></LogInSignUp>}
        ></Route>
        <Route
          path="/viewall"
          element={
            <ViewAll
              dataFiltered={dataFiltered}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              isLoading={isLoading}
            ></ViewAll>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
