import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Repos from "../Repos/Repos";
import "./Home.css";
import axios from "axios";
import Overview from "../Overview/Overview";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {useDataLayerValues} from "../../DataLayer";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

function Home() {
  const [{userName, darkMode}, dispatch] = useDataLayerValues();
 
  useEffect(async () => {
    await axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => {
        dispatch({
          type : "SET_USER_INFO",
          userInfo : response.data
        })
      });
  }, [userName]);

  useEffect(async () => {
    await axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((response) => {
        dispatch({
          type : "SET_USER_REPOS",
          userRepos : response.data
        })
      });
  }, [userName]);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Router>
        <Navbar/>
        <Header/>
        <div className="body">
          <Sidebar/>
          <Switch>
            <Route path = {"/" && "/overview"}><Overview/></Route>
            <Route path = "/repos"><Repos/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Home;
