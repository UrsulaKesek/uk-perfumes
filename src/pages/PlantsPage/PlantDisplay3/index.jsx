import React from "react";
import "./PlantDisplay3.css";
import PlantSection3 from "../PlantSection3";
import plants2  from "../constants2";

const PlantDisplay3 = () => (
  <section className="display">
    <h1 className="dis"> Plant Directory O-Z</h1>
    <PlantSection3 plants ={plants2}/>
  </section>
);
export default PlantDisplay3;
