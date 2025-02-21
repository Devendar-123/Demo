import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
    </div>
  );
};

export default RecipeCard;
