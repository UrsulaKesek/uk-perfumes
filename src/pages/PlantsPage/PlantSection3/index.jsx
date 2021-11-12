import React from "react";
import Plant from "../Plant";
import "./PlantSection3.css";

const PlantSection3=({ plants })=> {
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
export default PlantSection3;
