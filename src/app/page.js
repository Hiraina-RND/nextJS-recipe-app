"use client";

import { useState } from "react";
import recipe from "../data/data.json"
import Header from "./components/header/header";
import RecipeList from "./components/recipe/recipeList/recipeList";
import homeCss from "./page.module.css"

export default function Home() {
  const [orderRecipes, setOrderRecipes] = useState(recipe)

  const handleToggleOrder = () => {
    setOrderRecipes((prev) => [...prev].reverse())
  }

  return (
    <div className={homeCss.app}>
      <Header handleToggleOrder={handleToggleOrder} />
      <main className={homeCss.main}>
        <RecipeList recipes={orderRecipes} />
      </main>
    </div>
  );
}
