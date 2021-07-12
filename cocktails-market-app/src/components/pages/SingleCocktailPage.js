import React from "react";
import { useParams } from "react-router";
import { useFetchCocktails } from "../../uesFetchCocktails";
import "../../css/SingleCocktailPage.css";
import BuyButton from "../BuyButton";
import Ingredients from "../Ingredients";

const SingleCocktailPage = () => {
  const { id } = useParams();
  const link = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data } = useFetchCocktails(link);
  if (data[0] === undefined) return null;
  const {
    strDrink,
    strDrinkThumb,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
  } = data[0];
  return (
    <div>
      <h1 className="drink-name">{strDrink}</h1>
      <div className="singleCocktailPage">
        <img src={strDrinkThumb} alt="img" />
        <div className="single-page-container">
          <h3>Ingredients:</h3>
          <BuyButton className="buyButtonCocktail" item={data[0]} />
          <Ingredients item={data[0]} />
        </div>
      </div>
      <div className="description">
        <div>
          <p>
            <span>Category:</span> {strCategory}, {strAlcoholic}
          </p>
          <p>
            <span>Type of glass:</span> {strGlass}
          </p>
        </div>
        <div id="style-1" className="instruction">
          <span>Instructions:</span> <br />
          <p>{strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktailPage;
