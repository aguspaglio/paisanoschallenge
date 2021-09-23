import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Search from "./pages/Search";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { changeRootVariables } from "./utils/changeRootVariables";

const App = () => {
  const [themeColor, setThemeColor] = useState(localStorage.getItem("themeColor") || "light");
  const handleChangeTheme = (value) => {
    if (themeColor === "light") {
      setThemeColor("dark");
      localStorage.setItem("themeColor", "dark");
    } else {
      setThemeColor("light");
      localStorage.setItem("themeColor", "light");
    }
  };
  useEffect(() => {
    changeRootVariables(themeColor);
  }, [themeColor]);
  AOS.init();
  return (
    <Router>
      <Header themeColor={themeColor} handleChangeTheme={handleChangeTheme} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
