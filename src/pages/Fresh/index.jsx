import React from "react";
import "./Fresh.css";
import citrus1 from "./Images/citrus1.png";
import greena from "./Images/greena.png";
import water1 from "./Images/water1.png";
import fruity1 from "./Images/fruity1.png";
import citrus2 from "./Images/citrus2.png";
import greenb from "./Images/greenb.png";
import water2 from "./Images/water2.png";
import fruity2 from "./Images/fruity2.png";

const Fresh = () => (
  <section className="fre">
    <h2 className="fre">
      {" "}
      FRESH PAGE{" "}
      <span className="flip">(Flip the card for more information.)</span>
    </h2>
    <main className="fresec">
      <div>
        <h2 className="olfa">D-Fruity</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="fruity1" src={fruity1} alt="perfumepic" />
              <img  className="fruity2"src={fruity2} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  FRESH FRUITY  The fresh category was always zestily juicy
                  with fruit notes – traditionally citrus, in the past. But
                  today, lusher fruits – including mango, peach, melon,
                  pineapple and berries – are being blended into scents,
                  softening the freshness with a light yet sensual touch of
                  summery sweetness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">E-Green</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="greena" src={greena} alt="perfumepic" />
              <img className="greenb"src={greenb} alt="perfumepic" />
            </div>
            <div className="flip-card-back1">
              <div>
              <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  FRESH GREEN So clean, so sporty, the fresh greens showcase
                  elements like green tea, grass, herbs, vines and leaves
                  (violet leaf, for instance), and occasionally a little whisper
                  of fruit. This family, evokes a cool, shaded spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">F-Water</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="water1" src={water1} alt="perfumepic" />
              <img className="water2" src={water2} alt="perfumepic" />
            </div>
            <div className="flip-card-back2">
              <div>
              <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Gifted perfumers can actually make fresh aquatic fragrances
                  seem positively icy, or just dew-drenched, or simply conjure
                  up the fragrance of just-washed linen. Fragrances in this
                  family are also sometimes referred to as ‘ozonic’, such as the
                  smell of mountain air, or a sea breeze. Many (but not all)
                  fresh aquatic fragrances are created for men.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">G-Citrus</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="citrus1" src={citrus1} alt="perfumepic" />
              <img className="citrus2" src={citrus2} alt="perfumepic" />
            </div>
            <div className="flip-card-back3">
              <div>
              <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Citrus fragrances are old and abundant. Its compositions are
                  based on lemon, orange, bergamot, grapefruit or mandarin, with
                  other citrusy, aromatic and tart notes for men and floral
                  notes for women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Fresh;
