import React, { useContext } from "react";
import { DataContext } from "./DataContext";
const PopUp = () => {
  const { cartItem } = useContext(DataContext);
  return (
    <div
      className="PopUp"
      style={cartItem.length === 0 ? { display: "none" } : null}
    >
      {cartItem.length}
    </div>
  );
};

export default PopUp;
