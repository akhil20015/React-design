import React from "react";
import logo from "../Images/store.png";
import Btn from "../UI/button.js";
import SearchBar from "../Navbar/SeacrhBar.js";
import DropDown from "../Navbar/DropDown.js";

import "./Navbar.css";

const Navbar = () => {
  let button_text = "Sign-In / Login";

  return (
    <div className="nav-bar">
      <div className="logo">
        <h3>Amaze-on!!</h3>
        <img src={logo} alt="Error" />
      </div>
      <div className="nav-contents">
        <SearchBar />
        <Btn text={button_text}></Btn>
        <DropDown />
      </div>
    </div>
  );
};

export default Navbar;
