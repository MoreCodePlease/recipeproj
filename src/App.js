import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState([...RecipeData]);
  const reDex = (posts) => {
    const reDexPosts = posts.map((recipe, index) => {
      return {...recipe, index:index};
    });
    setRecipes(reDexPosts);
  }

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const handleCreate = (event, formData) => {
    setRecipes([...recipes, formData]);
    console.log(recipes);
    reDex(recipes);
  };

  const handleDel = (delEntry) => {
    console.log(delEntry)
    //setRecipes(newDex.filter(rec=> delEntry !== rec.index))
    //console.log(recipes)
    setRecipes([...recipes.slice(delEntry,delEntry+1 )]);
    console.log(recipes.slice(delEntry,delEntry+1))
  };
  console.log(recipes)
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} reDex={reDex} handleDel={handleDel}/>
      <RecipeCreate recipes={recipes} handleCreate={handleCreate}/>
    </div>
  );
}

export default App;
