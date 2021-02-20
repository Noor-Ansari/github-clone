import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Repos from "../Repos/Repos";
import "./Home.css";

function Home({userName}) {
  return (
    <div className="body">
      <Sidebar userName={userName} />
      <Repos userName={userName} />
    </div>
  );
}

export default Home;
