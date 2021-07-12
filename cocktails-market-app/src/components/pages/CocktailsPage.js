import React from "react";
import { useLocation } from "react-router";
import Filter from "../Filter";
import Search from "../Search";

const CocktailsPage = () => {
  const { search } = useLocation();
  const [, value] = search.split("?letter=");
  if (search === `?letter=${value}`) return <Filter />;
  return <Search />;
};

export default CocktailsPage;
