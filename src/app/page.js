"use client";

import { useState } from "react";
import recipes from "../data/data.json"
import Header from "./components/header/header";
import RecipeList from "./components/recipe/recipeList/recipeList";
import homeCss from "./page.module.css"

export default function Home() {
  const [orderRecipes, setOrderRecipes] = useState(recipes);
  const [searchValue, setSearchValue] = useState("");
  const filteredRecipes = orderRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleToggleOrder = () => {
    setOrderRecipes((prev) => [...prev].reverse())
  }

  const findRecipeByName = (value) => {
    setSearchValue(value);
  }

  return (
    <div className={homeCss.app}>
      <Header handleToggleOrder={handleToggleOrder} findRecipeByName={findRecipeByName} />
      <main className={homeCss.main}>
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  );
}
