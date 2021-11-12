import React from "react";
import "./Header.css";
import GreenCat from "./Images/green-cat.png";
const Header = () => (
  <>
    <div className="header">
      <img className="green" src={GreenCat} alt="green-cat" />
      <h1 className="header1">UK PERFUMES</h1>
    </div>
  </>
);

export default Header;
