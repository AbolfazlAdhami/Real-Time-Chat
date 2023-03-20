import React, { useContext, useState } from "react";
import "./index.scss";
import Login from "./Components/Auth/Login/Login";
import Singin from "./Components/Auth/Singin/Singin";
import Home from "./Container/Home/Home";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

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
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser, "app file");
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="singin" element={<Singin />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

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
