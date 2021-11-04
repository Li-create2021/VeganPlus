import { useState } from "react";
import "./SuggestionCardStyle.css";

function SuggestionCards({ recipe }) {

    const [showIsFavorite, setShowIsFavorite] = useState(false);

    function handleClickFavorite() {
        setShowIsFavorite(!showIsFavorite);
    }

    return (
        <div className="recipe-card" style={{backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`}} >
            <section className="suggestion-body-section">
                <button
                    onClick={handleClickFavorite}
                    className={showIsFavorite ? "isFavorite" : "notFavorite"}>
                </button>
                <section className="recipe-short-info">
                    <h3 className="recipe-header">{recipe.title}</h3>
                    <p className="recipe-total-time">{recipe.readyInMinutes}</p>
                </section>
            </section>
        
        </div >
    )
}

export default SuggestionCards;