import React from "react";
import "./StoreShopPage.css";
import Item from "../Item";

const StoreShopPage = ({ items, onAddToCart }) => {
  return (
    <ul className="spitems">
      {items.map((item) => (
        <li key={item.id} className="spitem">
          <Item item={item}>
            <button className="atc" onClick={() => onAddToCart(item)}>
              Add to Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
};

export default StoreShopPage;
