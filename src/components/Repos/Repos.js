import React, { useState, useEffect } from "react";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import "./Repos.css";

function Repos({repos}) {
 
  console.log(repos);
  return (
    <div className="wrapper">
      {repos.map((repo) => (
        <div className="repo" key={repo.id}>
          <div className="description">
            <h2>{repo.name}</h2>
            {repo.updated_at ? (
              <p>Updated at : {repo.updated_at}</p>
            ) : (
              <p>Uploaded at : {repo.pushed_at}</p>
            )}
          </div>
          <div className="star__btn">
            <button>
              <GradeOutlinedIcon />
              <small>Star</small>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Repos;
