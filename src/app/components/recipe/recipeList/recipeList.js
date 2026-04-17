import recipeListCss from "./recipeList.module.css"
import RecipeCard from "../recipeCard/recipeCard"

const RecipeList = ({ recipes }) => {
    return (
        <ul className={recipeListCss.list}>
            {recipes.map((recipe) => (
                <li key={recipe.name} className={recipeListCss.item}>
                    <RecipeCard recipe={recipe} />
                </li>
            ))}
        </ul>
    );
}

export default RecipeList;