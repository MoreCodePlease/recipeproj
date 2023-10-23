import React from "react";

function RecipeList({recipes, reDex, handleDel}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const handleDelete = (event) => {
    const index = event.target.parentNode.parentNode.id;
    console.log(index);
    handleDel(index);
  };

  const eachEntry = recipes.map((recipe, indy) => {
    return (
      <tr id={indy}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt=''/></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td><button onClick={handleDelete}>{indy}</button></td>
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
            <th>Actions</th>
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
