import React from "react";
import "./Header.css";
import ImportContactsOutlinedIcon from "@material-ui/icons/ImportContactsOutlined";
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import Switch from "@material-ui/core/Switch";
import { Link } from "react-router-dom";
import { useDataLayerValues } from "../../DataLayer";

function Header() {
  const [{ userInfo, darkMode }, dispatch] = useDataLayerValues();

  const handleChange = () => {
    dispatch({
      type: "SET_DARK_MODE",
      darkMode: !darkMode,
    });
  };

  return (
    <div className="header__container">
      <ul className="menus">
        <li>
          <Link to="/overview" className="menu__items">
            <ImportContactsOutlinedIcon />
            <p>Overview</p>
          </Link>
        </li>
        <li>
          <Link to="/repos" className="menu__items">
            <SaveRoundedIcon />
            <p>Repositories</p>
            <span className="badge">{userInfo?.public_repos}</span>
          </Link>
        </li>
        <li className="menu__items">
          <ListAltOutlinedIcon /> <p> Projects</p>
        </li>
        <li className="menu__items">
          <OpenInBrowserIcon /> <p> Packages</p>
        </li>
      </ul>
      <Switch onChange={handleChange} value={darkMode} />
    </div>
  );
}

export default Header;
