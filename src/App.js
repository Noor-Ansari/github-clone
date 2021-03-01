import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useDataLayerValues } from "./DataLayer";

function App() {
  const [{ userName }] = useDataLayerValues();

  if (userName) {
    document.title = `Github/${userName}`;
  }

  return <div className="App">{userName ? <Home /> : <Login />}</div>;
}

export default App;
