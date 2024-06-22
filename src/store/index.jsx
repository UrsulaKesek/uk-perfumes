import React, { useState } from "react";
import "./Store.css";
import Nav from "./components/Nav";
import StoreContent from "./StoreContent";

const Store = () => {
  const [activeTab, setActiveTab] = useState("shop");

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((oldCart) => [...oldCart, item]);
  }

  const totalCart = (cart) => {
    const totalItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0,
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(totalItems);
  };

  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const cartCopy = [...cart];
        cartCopy.splice(index, 1);
        return cartCopy;
      });
    }
  };

  const onTakeOff = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    console.log(index);
    if (index >= 0) {
      setCart((cart) => {
        const cartCopy = [...cart];
        cartCopy.splice(index,item);
        console.log(item.count);
        console.log(cartCopy);
        return cartCopy;


      });
    }
  };

  return (
    <section className="storepage">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="content">
        <StoreContent
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart={totalCart(cart)}
          onTakeOff={onTakeOff}
        />
      </main>
    </section>
  );
};

export default Store;
