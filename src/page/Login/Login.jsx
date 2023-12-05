import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="login-img"
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="ur email or phone" />
          <input type="password" placeholder="ur password" />
          <button className="login-btn">Sign In</button>
          <span>
            New to Netflix? <b>Sign up</b>
          </span>
          <small>This page is protected by huynhkhoaa2703</small>
        </form>
      </div>
    </div>
  );
};

export default Login;
