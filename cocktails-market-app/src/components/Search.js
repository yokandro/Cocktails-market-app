import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useFetchCocktails } from "../uesFetchCocktails";
import Cocktail from "./Cocktail";

const Search = () => {
  const { search } = useLocation();
  const [, value] = search.split("?name=");
  const link = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
  const { data } = useFetchCocktails(link);
  if (data === "not-found") {
    return <Redirect to="/not-found" />;
  }
  return (
    <div className="searchPage">
      {data.map((item) => (
        <Cocktail key={item.strDrink} item={item} />
      ))}
    </div>
  );
};

export default Search;
