import React from 'react';

function RecipeCard({ recipe }) {
  return (
    
    <div className="recipe-card">
      <img src={`${recipe.image}`} alt={recipe.name} />
      <h3>{recipe.name}</h3>
      <p><b>Ingredients:</b> {recipe.ingredients.join(', ')}</p>
      <p><b>Preparation Time:</b> {recipe.prepTime} minutes</p>
      <p><b>Price: </b> Rs.{recipe.price}/-</p>
      <p><b>Ratting:</b>{recipe.Ratting}</p>
    </div>
    
  );
}

export default RecipeCard;
