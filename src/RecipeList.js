import React from "react";

function RecipeList({recipes, reDex, handleDel}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const handleDelete = (event) => {
    const index = event.target.parentNode.parentNode.id;
    handleDel(index);
    reDex(recipes);
  };

  const eachEntry = recipes.map((recipe, index) => {
    return (
      <tr id={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt=''/></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td><button onClick={handleDelete}>Delete</button></td>
      </tr>
    )
  });
 
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {eachEntry}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
