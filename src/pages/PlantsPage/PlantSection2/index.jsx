import React from "react";
import Plant from "../Plant";
import "./PlantSection2.css";

const PlantSection2=({ plants })=> {
  return (
    <section className="plantitems">
      {plants.map((plants) => (
        <div key={plants.id}>
          <Plant plants={plants} />
        </div>
      ))}
    </section>
  );
}
export default PlantSection2;
