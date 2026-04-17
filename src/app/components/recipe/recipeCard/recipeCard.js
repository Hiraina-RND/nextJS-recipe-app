import recipeCardCss from "./recipeCard.module.css"
import { useState } from "react"

const RecipeCard = ({ recipe }) => {
    const [pinned, setPinned] = useState(false)

    return (
        <article className={`${recipeCardCss.card} ${pinned ? recipeCardCss.pinned : ''}`}>
            <img
                className={recipeCardCss.image}
                src={recipe.image}
                alt=""
            />
            <div className={recipeCardCss.body}>
                <h2 className={recipeCardCss.name}>{recipe.name}</h2>
                <span className={recipeCardCss.badge}>{recipe.category}</span>
                <p className={recipeCardCss.duration}>{recipe.duration} min</p>
                <button
                    type="button"
                    className={recipeCardCss.pin}
                    onClick={() => setPinned((p) => !p)}
                >
                    {pinned ? 'Unpin' : 'Pin'}
                </button>
            </div>
        </article>
    )
}

export default RecipeCard;