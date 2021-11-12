import React from "react";
import "./Item.css";

const Item = ({ item, children }) => {
  return (
    <section className="item">
      <div className="ls">
        <img className="img1" src={item.img} alt="perfume-bottle" />
        <div className="itnum">
          {item.productNumber}
        </div>
        <div className="title">{item.title}</div>
        <div className="desc">{item.desc}</div>
      </div>
      <div className="rs">
        <div className="price">Price: £{item.price}</div>
        {children}
      </div>
    </section>
  );
};
export default Item;
