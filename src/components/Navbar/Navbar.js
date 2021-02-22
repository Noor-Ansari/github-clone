import React from "react";
import Logo from "../../assets/logo.svg";
import "./Navbar.css";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";

function Navbar({ userInfo }) {
    console.log("Navbar")
    console.log(userInfo)
  return (
    <div className="navbar__container">
      <div className="navbar__left">
        <img src={Logo} alt="logo" />
        <input type="text" placeholder="Search or jump to..." className="search__bar" />
        <p>Pull requests</p>
        <p>Issues</p>
        <p>Marketplace</p>
        <p>Explore</p>
      </div>
      <div className="navbar__right">
        <NotificationsOutlinedIcon />
        <AddOutlinedIcon />
        <ArrowDropDownOutlinedIcon />
        <img
          className="navbar__avatar"
          src={userInfo.avatar_url}
          alt={userInfo.login}
        />
        <ArrowDropDownOutlinedIcon />
      </div>
    </div>
  );
}

export default Navbar;
