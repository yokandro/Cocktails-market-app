import React from "react";
import { Link } from "react-router-dom";
import BuyButton from "./BuyButton";

const Cocktail = ({ item, imgWidth }) => {
  return (
    <div className="cocktail">
      <Link to={`/cocktail/${item.idDrink}`}>
        <img src={item.strDrinkThumb} width="250px" alt={item.strDrink} />
      </Link>
      <p>{item.strDrink}</p>
      <BuyButton className="buyBtn" item={item} />
    </div>
  );
};

export default Cocktail;
