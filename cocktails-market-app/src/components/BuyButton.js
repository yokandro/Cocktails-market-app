import React, { useContext } from "react";
import Basket from "./icons/Basket";
import { DataContext } from "./DataContext";

const BuyButton = ({ item, className }) => {
  const { cartItem, setCartItem } = useContext(DataContext);
  return (
    <div className={className} onClick={() => setCartItem([...cartItem, item])}>
      <Basket />
    </div>
  );
};

export default BuyButton;
