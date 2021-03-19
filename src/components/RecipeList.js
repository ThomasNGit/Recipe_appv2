import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe {...recipe} key={recipe.id} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary">Add recipe</button>
      </div>
    </div>
  );
}
