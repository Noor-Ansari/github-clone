import React, {useState} from 'react';
import "./Login.css";
import Logo from "E:/React/github-clone/src/assets/logo.svg";

function Login({setUserName}) {
    let name;
    const handleChange = (e) => {
        name = e.target.value
    }
    const handleClick = () => {
        setUserName(name)
    }

    return (
        <div className="card__container">
            <div className="card">
                <img className="logo" src={Logo} alt="" />
                <br/>
                <input type="text" className="input" name="username" value={name} onChange={handleChange}
                placeholder="Enter username..."
                / >
                <button className="btn" onClick={handleClick}>Log in</button>
                <p>Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </div>
    )
}

export default Login
