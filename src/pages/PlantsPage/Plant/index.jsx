import React from "react";
import "./Plant.css";

const Plant = ({ plants, children }) => {
  return (
    <section className="plantcard">
      <div className="plant-itema">
        <div className="name">{plants.name}</div>
      </div>
      <div className="plant-itemb">
        <img className="img" src={plants.img} alt="plant-pic" />
        <div className="desc1">{plants.desc}</div>
      </div>
      <div>{children}</div>
    </section>
  );
};
export default Plant;
