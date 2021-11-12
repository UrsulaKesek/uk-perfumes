import React from "react";
import "./Woody.css";
import aromatic from "./Images/aromatic.png";
import woodfruity from "./Images/wood-fruity.png";
import woodsy from "./Images/woodsy.png";
import mossy from "./Images/mossy.png";
import aromatic1 from "./Images/aromatic1.png";
import woodfruity1 from "./Images/wood-fruity1.png";
import woodsy1 from "./Images/woodsy1.png";
import mossy1 from "./Images/mossy1.png";

const Woody = () => (
  <section className="woodsy">
    <h2 className="woo">
      {" "}
      WOODY
      <span className="woo">(Flip the card for more information.)</span>
    </h2>
    <main className="woods">
      <div>
        <h2 className="olfa">L-Aromatic</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="fruity1" src={aromatic} alt="perfumepic" />
              <img className="fruity2" src={aromatic1} alt="perfumepic" />
            </div>
            <div className="flip-card-back4">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  There is only a tiny number of women’s fragrances in this
                  section – but plenty for men (and plenty you can borrow from
                  each other). Aromatic herbs – lavender, geranium, basil,
                  cumin, rosemary, sage and more – are used to deliver a fresh,
                  green twist to the woody notes. Barks, mosses and patchouli
                  often feature, too – and sometimes resins, to warm the
                  fragrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">M-Fruity</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="greena" src={woodfruity} alt="perfumepic" />
              <img className="greenb" src={woodfruity1} alt="perfumepic" />
            </div>
            <div className="flip-card-back5">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Woody fresh fragrances have an emphasis on citrussy notes, but
                  here the ‘fruitiness’ is more luscious and honeyed. Think:
                  peach, plum, nectarine; all those lovely summer fruits which
                  drip down your chin when you bit into them, if eaten at a
                  state of ripe perfection! The fruits soften and add sensuality
                  here to the woods, which can tend to be dry, aromatic and
                  masculine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">N-Mossy</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="water1" src={mossy} alt="perfumepic" />
              <img className="water2" src={mossy1} alt="perfumepic" />
            </div>
            <div className="flip-card-back6">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  Perfumers call these forest notes of oakmoss, amber and citrus
                  Chypre fragrances. The family takes its name from the first
                  significant mossy-woody fragrance, Chypre de Coty, created by
                  François Coty in 1917. Today's chypres continue to be forest
                  notes, with earthy patchouli and modern mossy notes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="olfa">P-Woody</h2>
        <div className="flip-card">
          <div className="flip-card-inner1">
            <div className="flip-card-front">
              <img className="citrus1" src={woodsy} alt="perfumepic" />
              <img className="citrus2" src={woodsy1} alt="perfumepic" />
            </div>
            <div className="flip-card-back7">
              <div>
                <h2 className="olfa">Olfactory Group</h2>
              </div>
              <div>
                <p className="fcb">
                  As the name suggests woody fragrances are distinctive by their
                  opulent woody character with notes coming from woods materials
                  like trees, resin, moss, bark, pine cones and bushes but also
                  roots. Grasses and leaves can have an intensely earthy, woody
                  character (like Patchouli and Vetiver).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
);

export default Woody;
