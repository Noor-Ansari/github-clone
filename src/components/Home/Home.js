import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Repos from "../Repos/Repos";
import "./Home.css";
import axios from "axios";
import Overview from "../Overview/Overview";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

function Home({ userName }) {
  const [repos, setRepos] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const [page, setPage] = useState("OVERVIEW");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(async () => {
    await axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => setUserInfo(response.data));
  }, []);

  useEffect(async () => {
    await axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((response) => setRepos(response.data));
  }, []);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar userInfo={userInfo} />
      <Header userInfo={userInfo} page={page} setPage={setPage} darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="body">
        <Sidebar userInfo={userInfo} />
        {page === "OVERVIEW" ? (
          <Overview repos={repos} />
        ) : (
          <Repos repos={repos} />
        )}
      </div>
    </div>
  );
}

export default Home;
