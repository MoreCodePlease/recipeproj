import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  
  //initialize recipe variable
  const [recipes, setRecipes] = useState([...RecipeData]);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
const handleDel = (delEntry) => {
    const filList  = recipes.filter((post, ind) => ind !== parseFloat(delEntry));
    setRecipes([...filList]);
  };

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const handleCreate = (event, formData) => {
    setRecipes([...recipes, {...formData}]);
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDel={handleDel}/>
      <RecipeCreate recipes={recipes} handleCreate={handleCreate}/>
    </div>
  );
}

export default App;
