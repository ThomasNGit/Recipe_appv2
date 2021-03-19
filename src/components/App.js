import RecipeList from "./RecipeList";
import "../css/app.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

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
    <RecipeList
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDelete={handleRecipeDelete}
    />
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
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
    instructions: "1. Put paprika on pork \n2. Put pork in oven\n3. Eat pork",
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
