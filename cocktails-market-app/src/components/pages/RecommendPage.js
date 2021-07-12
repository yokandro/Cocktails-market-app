import React from "react";
import { useFetchCocktails } from "../../uesFetchCocktails";
import { Link } from "react-router-dom";
import BuyButton from "../BuyButton";

const RecommendPage = () => {
  const link = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const { data } = useFetchCocktails(link);
  if (data[0] === undefined) return null;
  const { idDrink, strDrink, strDrinkThumb } = data[0];
  return (
    <div className="recommendPage">
      <h1>Для вибору коктейлю скористайтесь пошуком або фільтром</h1>
      <h3>Персональна рекомендація:</h3>
      <div className="recommendPage-cocktail">
        <Link to={`/cocktail/${idDrink}`}>
          <img src={strDrinkThumb} alt={strDrink} />
        </Link>
        <div className="personal-rec-text">
          <p>Name: {strDrink}</p>
          <BuyButton className="personal-rec-btn" item={data[0]} />
        </div>
      </div>
    </div>
  );
};

export default RecommendPage;
