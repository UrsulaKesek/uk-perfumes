import React from "react";
import "./PlantDisplay2.css";
import PlantSection2 from "../PlantSection2";
import plants1  from "../constants1";

const PlantDisplay2 = () => (
  <section className="display">
    <h1 className="dis"> Plant Directory L-O</h1>
    <PlantSection2 plants ={plants1}/>
  </section>
);
export default PlantDisplay2;
