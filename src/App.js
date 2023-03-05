import React, { useState } from "react";
import "./index.scss";
import Login from "./Components/Auth/Login/Login";
import Singin from "./Components/Auth/Singin/Singin";
import Home from "./Container/Home/Home";

function App() {
  const [pervTheme, setTheme] = useState("");
  const changeThem = (e) => {
    const theme = e.target.className;
    setTheme(theme);

    if (pervTheme == "") {
      document.querySelector(".App").classList.add(theme);
      return;
    }
    document.querySelector(".App").classList.remove(pervTheme);
    document.querySelector(".App").classList.add(theme);
  };
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Singin /> */}
      <Home />
      <div className="theme">
        <span onClick={(e) => changeThem(e)} className="red"></span>
        <span onClick={(e) => changeThem(e)} className="yellow"></span>
        <span onClick={(e) => changeThem(e)} className="pink"></span>
        <span onClick={(e) => changeThem(e)} className="orange"></span>
        <span onClick={(e) => changeThem(e)} className="default"></span>
      </div>
    </div>
  );
}

export default App;
