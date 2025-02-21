import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import Filters from './Filters';
import "./task2.css"
function MainComponent() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOptions, setFilterOptions] = useState({
    type: '',
    prepTime: ''
  });

  useEffect(()=>{
    async function fetchData() {
      try{
        const response = await fetch('./recepies.json');
                const data = await response.json();
                setRecipes(data)
      }
      catch{
        console.log('Error');
        
      }
    }
    fetchData();
  },[]);

  useEffect(() => {
    let filtered = recipes.filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesType =
        !filterOptions.type || recipe.type === filterOptions.type;

      const matchesPrepTime =
        !filterOptions.prepTime || recipe.prepTime <= filterOptions.prepTime;

      return matchesSearch && matchesType && matchesPrepTime;
    });

    setFilteredRecipes(filtered);
  }, [recipes, searchQuery, filterOptions]);

  return (
    <div className="container">
      <h1 style={{textAlign:"center" , fontStyle:"italic",fontWeight:"700"}}>South Indian Recepies!</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default MainComponent;
