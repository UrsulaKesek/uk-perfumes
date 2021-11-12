import React from "react";
import "./Nav.css";

const Nav = ({ activeTab, onTabChange }) => {
  const itemClass = (tabName) => {
    return `nav-item${activeTab === tabName ? "selected" : ""}`;
  };
  return (
    <nav className="storenav">
      <ul>
        <li className={itemClass("shop")}>
          <button className="sh" onClick={() => onTabChange("shop")}>
            SHOP
          </button>
        </li>
        <li className="view">Click on CART to View Your Shopping</li>
        <li className={itemClass("cart")}>
          <button className="ca" onClick={() => onTabChange("cart")}>
            CART
          </button>
        </li>
        <li className={itemClass("weather")}>
          <button className="we" onClick={() => onTabChange("weather")}>
            WEATHER
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
