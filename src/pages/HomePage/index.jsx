import React from "react";
import Bird from "./Images/bird200x200.gif";
import BlueCat from "./Images/bluecat.png";
import Bubble from "./Images/bubble-iv.gif";
import Chick from "./Images/smallbird.png";
import Front from "./Images/aw-front.png";
import Front2 from "./Images/aw-front2.png";
import GreenCat from "./Images/green1.png";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <section className="main">
        <div className="box2">
          <h2 className="hph2">COOL CHICKS AND CATS ROAM THE WORLD</h2>
          <img className="bird" src={Bird} alt="robin-bird" />
          <img className="green1" src={GreenCat} alt="green-cat" />
          <NavLink className="contact1" to="/contact">
            YOUR CONTACT DETAILS
          </NavLink>
          <img className="chick" src={Chick} alt="small-robin-bird" />
          <img className="blue1" src={BlueCat} alt="blue-cat" />
        </div>
        <img className="front" src={Front} alt="andy-window" />
        <img className="front2" src={Front2} alt="andy-window2" />
        <div className="box3">
          <img className="bubble" src={Bubble} alt="small-bubble-animation" />
        </div>
      </section>
    </>
  );
}
export default HomePage;
