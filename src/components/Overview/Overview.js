import React, { useState, useEffect } from "react";
import "./Overview.css";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import DragIndicatorTwoToneIcon from "@material-ui/icons/DragIndicatorTwoTone";

function Overview({ repos }) {
  const [pinnedRepos, setPinnedRepos] = useState([]);

  useEffect(() => {
    // randomly select 6 repos among all
    const shuffled = repos.sort(() => 0.5 - Math.random());
    setPinnedRepos(shuffled.slice(0, 6));
  }, [repos]);

  return (
    <div className="overview__container">
      <div className="header">
        <small>Pinned</small>
        <small>Customize your pins</small>
      </div>
      {pinnedRepos.map((repo) => (
        <div className="pinned__repo" key={repo.id}>
          <div className="title">
            <SaveRoundedIcon />
            <h1 className="repo__name">{repo.name}</h1>
          </div>
          <DragIndicatorTwoToneIcon className="dragger" />
        </div>
      ))}
    </div>
  );
}

export default Overview;
