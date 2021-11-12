import React from "react";
import { NavLink } from "react-router-dom";
import "./Cabinet.css";
import fragranceWheel from "./Images/fragrance-wheel.png";

const CabinetPage = () => (
  <>
    <section className="aroma">
      <main className="cbmain">
        <h1 className="cbh1">Cabinet Of Curiosities</h1>
        <div className="perfOne">
          <h2 className="fl">Floral</h2>
          <NavLink className="floral" to="/floral">
            A
          </NavLink>
          <NavLink className="floral" to="/floral">
            B
          </NavLink>
          <NavLink className="floral" to="/floral">
            C
          </NavLink>
        </div>
        <div className="perfTwo">
          <h2 className="fr">Fresh</h2>

          <NavLink className="fresh" to="/fresh">
            D
          </NavLink>
          <NavLink className="fresh" to="/fresh">
            E
          </NavLink>
          <NavLink className="fresh" to="/fresh">
            F
          </NavLink>
          <NavLink className="fresh" to="/fresh">
            G
          </NavLink>
        </div>
        <div className="perfThree">
          <h2 className="or">Oriental</h2>
          <NavLink className="orient" to="/oriental">
            H
          </NavLink>
          <NavLink className="orient" to="/oriental">
            J
          </NavLink>
          <NavLink className="orient" to="/oriental">
            K
          </NavLink>
        </div>
        <div className="perfFour">
          <h2 className="wo">Woody</h2>
          <NavLink className="woody" to="/woody">
            L
          </NavLink>
          <NavLink className="woody" to="/woody">
            M
          </NavLink>
          <NavLink className="woody" to="/woody">
            N
          </NavLink>
          <NavLink className="woody" to="/woody">
            P
          </NavLink>
        </div>
      </main>
      <aside className="wheel">
        <img className="sntwl" src={fragranceWheel} alt="perfume-chart" />
      </aside>
    </section>
  </>
);

export default CabinetPage;
