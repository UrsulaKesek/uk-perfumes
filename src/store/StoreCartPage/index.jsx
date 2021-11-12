import React from "react";
import Item from "../Item";
import EmptyCart from "../StoreEmptyCart";
import "./StoreCartPage.css";

function StoreCartPage({ items, onPlus, onMinus, onTakeOff }) {
  return items.length === 0 ? (
    <EmptyCart />
  ) : (
    <section className="cpitems">
      {items.map((item) => {
        return (
          <div key={item.id} className="cpitem">
            <Item item={item}>
              <div className="cpmanage">
                <button className="minus" onClick={() => onMinus(item)}>
                  &#45;
                </button>
                <span className="count">{item.count}</span>
                <button className="plus" onClick={() => onPlus(item)}>
                  &#43;
                </button>
              </div>
              <button className="rfc" onClick={() => onTakeOff(item)}>
                Remove
              </button>
            </Item>
          </div>
        );
      })}
      <div className="total">
        Total to Pay: £
        {items.reduce((sum, item) => sum + item.price * item.count, 0)}
      </div>
      <div className="incart">
        Items
        <span className="shoppingcart" role="img" aria-label="shopping-cart">
          🛒
        </span>
        {items.reduce((sum, item) => sum + item.count, 0)}
      </div>
    </section>
  );
}

export default StoreCartPage;
