import React from "react";
import "./Floral.css";
import floral1 from "./Images/florala.png";
import floral2 from "./Images/floralb.png";
import floral3 from "./Images/floralc.png";
import floral4 from "./Images/floral2a.png";
import floral5 from "./Images/floral2b.png";
import floral6 from "./Images/floral2c.png";

const Floral = () => (
  <section className="flo">
    <h2 className="flor">
      {" "}
      FLORAL PAGE{" "}
      <span className="flip">(Flip the card for more information.)</span>
    </h2>
    <main className="flosec">
      <div>
        <h2 className="f">A-Floral</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="floral1" src={floral1} alt="perfumepic" />
              <img className="floral4" src={floral4} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  The floral scent family is one of the most common families and
                  are used in many well-known perfumes. Floral scents are most
                  often used in women’s fragrances, although they are
                  occasionally used in men’s as well. They usually smell like
                  fresh-cut flowers or have a powdery note to them.
                </p>
                <p className="fcb">Common floral family notes:</p>
                <p className="fcb">Rose </p>
                <p className="fcb">Jasmine</p>
                <p className="fcb">Orange blossom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="f">B-Floral Fruity</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="floral2" src={floral2} alt="perfumepic" />
              <img className="floral5" src={floral5} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Floral Fruity – Since 1995, new fruity notes have blossomed in
                  the world of perfumery. The floral body is easily
                  identifiable, and the fruity notes are obvious.
                </p>
                <p className="fcb">Common fruity notes:</p>
                <p className="fcb">Apple </p>
                <p className="fcb">Apricot</p>
                <p className="fcb">Lychee</p>
                <p className="fcb">Raspberry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="f">C-Floral Oriental</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="floral3" src={floral3} alt="perfumepic" />
              <img className="floral6" src={floral6} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Floral oriental perfumes, also known as “amber” fragrances –
                  stand out because of their unique blend of warmth and
                  sensuality. They draw their richness from heady substances
                  often associated with exotic floral and spicy scents.
                </p>
                <p className="fcb">Ingredients can include:</p>
                <p className="fcb">Oud </p>
                <p className="fcb">Vanilla</p>
                <p className="fcb">Precious woods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Floral;
