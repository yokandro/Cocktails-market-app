import React from "react";

const Ingredients = ({ item }) => {
  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4 } =
    item;
  return (
    <div className="ingredients-box">
      <div className="ingredient">
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Medium.png`}
          alt={strIngredient1}
        />
        <p>{strIngredient1}</p>
      </div>
      <div className="ingredient">
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient2}-Medium.png`}
          alt={strIngredient2}
        />
        <p>{strIngredient2}</p>
      </div>
      <div
        className="ingredient"
        style={strIngredient3 == null ? { display: "none" } : null}
      >
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient3}-Medium.png`}
          alt={strIngredient3}
        />
        <p>{strIngredient3}</p>
      </div>
      <div
        className="ingredient"
        style={strIngredient4 == null ? { display: "none" } : null}
      >
        <img
          src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient4}-Medium.png`}
          alt={strIngredient4}
        />
        <p>{strIngredient4}</p>
      </div>
    </div>
  );
};

export default Ingredients;
