import React, { useState } from "react";
import "./navbar.scss";
import { Search, Notifications, KeyboardArrowDown } from "@mui/icons-material";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScroll ? "navbar scroll" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="img"
          ></img>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Huynh Khoa</span>
          <Notifications className="icon" />
          <img
            src="https://webaffiliatevn.com/wp-content/uploads/2020/08/IMGLOGO_Primary_CMYK_Blue_Rel_webready.jpg"
            alt="avatar"
          ></img>
          <div className="profile">
            <KeyboardArrowDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
