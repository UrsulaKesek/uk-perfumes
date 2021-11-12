import React from "react";
import StoreShopPage from "../StoreShopPage";
import StoreCartPage from "../StoreCartPage";
import WeatherCard from "../../weather";
import items from "../constants";

function StoreContent({ cart, onAddToCart, onRemoveItem, onTakeOff, tab }) {
  switch (tab) {
    default:
    case "shop":
      return <StoreShopPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <StoreCartPage
          items={cart}
          onPlus={onAddToCart}
          onMinus={onRemoveItem}
          onTakeOff={onTakeOff}
        />
      );
    case "weather":
      return <WeatherCard />;
  }
}

export default StoreContent;
