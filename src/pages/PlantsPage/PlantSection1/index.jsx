import React from "react";
import Plant from "../Plant";
import "./PlantSection.css";

const PlantSection1=({ plants })=> {
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
export default PlantSection1;
