import React, { useState, useEffect } from "react";

import { jsonData } from "./data";
import RecipeList from "./RecipeList";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

const Main = ()=>{
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    isVegetarian: null,
    maxTime: 60
  });

  useEffect(() => {
    fetch(jsonData)
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
        setFilteredRecipes(data);
      });
  }, []);

  useEffect(() => {
    let filteredData = recipes.filter(recipe => {
      // Search by name or ingredients
      const isSearchMatch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            recipe.ingredients.some(ingredient =>
                              ingredient.toLowerCase().includes(searchQuery.toLowerCase())
                            );

      // Apply vegetarian filter
      const isVegetarianMatch = filters.isVegetarian === null || recipe.isVegetarian === filters.isVegetarian;

      // Apply preparation time filter
      const isTimeMatch = recipe.preparationTime <= filters.maxTime;

      return isSearchMatch && isVegetarianMatch && isTimeMatch;
    });

    setFilteredRecipes(filteredData);
  }, [searchQuery, filters, recipes]);

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters filters={filters} setFilters={setFilters} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Main;
