import React from 'react';
import "./Header.css";
import ImportContactsOutlinedIcon from '@material-ui/icons/ImportContactsOutlined';
import SaveRoundedIcon from "@material-ui/icons/SaveRounded";
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import Switch from '@material-ui/core/Switch';
import {Link} from "react-router-dom";


function Header({userInfo, page, setPage}) {
    return (
        <div className="header__container">
            <ul className="menus">
                <li onClick={()=>setPage("OVERVIEW")}><ImportContactsOutlinedIcon/>  <p>Overview</p></li>
                <li onClick={()=>setPage("REPOS")}><SaveRoundedIcon/> <p> Repositories</p><span className="badge">{userInfo.public_repos}</span></li>
                <li><ListAltOutlinedIcon/> <p> Projects</p></li>
                <li><OpenInBrowserIcon/> <p> Packages</p></li>
            </ul>
            <Switch className="switch" />
        </div>
    )
}

export default Header;
