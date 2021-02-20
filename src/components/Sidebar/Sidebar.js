import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Sidebar.css";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

function Sidebar({userName}) {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((response) => setUserInfo(response.data));
  }, []);
  console.log(userInfo);
  return (
    <div className="container">
      <img
        className="profile__pic"
        src={userInfo.avatar_url}
        alt={userInfo.login}
      />
      <h1>{userInfo.login}</h1>
      <h3>{userInfo.name}</h3>
      <p className="bio">{userInfo.bio}</p>
      <button>Edit profile</button>
      <div className="additional__information">
        <GroupOutlinedIcon />
        <p>
          {userInfo.followers} followers {userInfo.following} following
        </p>
        <GradeOutlinedIcon />
        <p>{userInfo.public_gists}</p>
      </div>
    </div>
  );
}

export default Sidebar;
