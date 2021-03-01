import React, { useState } from "react";
import { useDataLayerValues } from "../../DataLayer";
import "./Login.css";
import Logo from "E:/React/github-clone/src/assets/logo.svg";

function Login() {
  const [userName, setUserName] = useState("");
  const [, dispatch] = useDataLayerValues();

  const handleClick = () => {
    dispatch({
      type: "SET_USER_NAME",
      userName: userName,
    });
  };

  return (
    <div className="card__container">
      <div className="card">
        <img className="logo" src={Logo} alt="" />
        <br />
        <form className="login__form">
          <input
            type="text"
            className="input"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter username..."
          />
          <button className="btn" onClick={handleClick}>
            Log in
          </button>
        </form>
        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
