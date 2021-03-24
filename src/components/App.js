import RecipeList from "./RecipeList";
import "../css/app.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = "reactRecipeBook.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
  };

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "instr",
      ingredients: [
        {
          id: uuidv4(),
          name: "Name",
          amount: "1 Tbs",
        },
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: "Put salt on chicken. Put chicken in oven. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain pork",
    servings: 5,
    cookTime: "0:45",
    instructions: "Put paprika on pork. Put pork in oven. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2Tbs",
      },
    ],
  },
];

export default App;
