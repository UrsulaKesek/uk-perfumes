import React from "react";
import "./Oriental.css";
import spicy from "./Images/spicy.png";
import oriental from "./Images/oriental.png";
import oriwood from "./Images/woody.png";
import spicy1 from "./Images/spicy1.png";
import oriental1 from "./Images/oriental1.png";
import oriwood1 from "./Images/woody1.png";

const Oriental = () => (
  <section className="ori">
    <h2 className="ori">
      {" "}
      ORIENTAL
      <span className="flip">(Flip the card for more information.)</span>
    </h2>
    <main className="flosec">
      <div>
        <h2 className="f">H-Spicy Oriental</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="spicy" src={spicy} alt="perfumepic" />
              <img className="spicy1" src={spicy1} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Just as the name suggests, sweet spices are played up in this
                  oriental family member: vanilla, cinnamon, clove, nutmeg,
                  swirling with exotic white flowers of jasmine and ylang-ylang,
                  and perhaps touches of resins and incense. A sensual – sexy,
                  we’d say – fragrance category.
                </p>
                <p className="fcb">Common Spicy Oriental family notes:</p>
                <p className="fcb">Cinnamon </p>
                <p className="fcb">Jasmine</p>
                <p className="fcb">Ylang-Ylang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="f">J-Oriental</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="oriental" src={oriental} alt="perfumepic" />
              <img className="oriental1" src={oriental1} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  With notes of vanilla, ambergris (or, these days, “amber”,
                  which is the synthetic form of this mysterious and precious
                  natural ingredient), amber orientals have a soft and sometimes
                  powdery warmth and sensuality – and a tendency to last and
                  last, on your skin.
                </p>
                <p className="fcb">Common orientals notes:</p>
                <p className="fcb">Ambergris</p>
                <p className="fcb">Lemongrass</p>
                <p className="fcb">Vanilla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="f">K-Woody Oriental</h2>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="oriwood" src={oriwood} alt="perfumepic" />
              <img className="oriwood1" src={oriwood1} alt="perfumepic" />
            </div>
            <div className="flip-card-back">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Woody elements of sandalwood, rosewood – and patchouli – are
                  used to add extra depth to the traditional oriental spicy
                  notes, adding mystery and depth. Unlike fresh orientals and
                  soft orientals, these are more suited to dressing up, dining
                  out, dancing…
                </p>
                <p className="fcb">Ingredients can include:</p>
                <p className="fcb">Oud </p>
                <p className="fcb">Patchouli</p>
                <p className="fcb">Precious woods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Oriental;
