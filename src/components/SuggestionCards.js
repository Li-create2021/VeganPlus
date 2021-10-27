import { useState } from "react";
import "./SuggestionCardStyle.css"

const SuggestionCards = (props) => {

    const [showIsFavorite, setShowIsFavorite] = useState(props.isFavorite);

    function handleClickFavorite() {
        setShowIsFavorite(!showIsFavorite);
    }

    return (
        <div className="suggestion-card">
            <section className="suggestion-body-section">
                <button
                    id="favorite-btn"
                    onClick={handleClickFavorite}
                    className={showIsFavorite ? "isFavorite" : "notFavorite"}>
                </button>

                <h3 className="suggestion-header">Patatas Bravas</h3>
                <p className="suggestion-total-time">10min</p>
            </section>
        </div >
    )
}

export default SuggestionCards;