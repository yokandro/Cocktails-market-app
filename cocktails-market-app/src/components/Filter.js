import React from "react";
import { useFetchCocktails } from "../uesFetchCocktails";
import { Redirect, useLocation } from "react-router-dom";
import Cocktail from "./Cocktail";

const Filter = () => {
  const { search } = useLocation();
  const [, value] = search.split("?letter=");
  const link = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;
  const { data } = useFetchCocktails(link);
  if (data === "not-found") {
    return <Redirect to="/cocktails/not-found" />;
  }
  return (
    <div className="filterPage">
      {data.map((item) => (
        <Cocktail key={item.idDrink} item={item} />
      ))}
    </div>
  );
};

export default Filter;
