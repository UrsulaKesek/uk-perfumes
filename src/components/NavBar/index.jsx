import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link className="home" to="/" >
          Home
        </Link>
      </li>
      <li>
        <Link className="store" to="/store">
          Store
        </Link>
      </li>
      <li>
        <Link className="plants" to="/plants">
          Plants
        </Link>
      </li>
      <li>
        <Link className="cabinet" to="/cabinet">
          Cabinet
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
