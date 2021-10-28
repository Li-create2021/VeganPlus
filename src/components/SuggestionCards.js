import { useState } from "react";
import "./SuggestionCardStyle.css";

function SuggestionCards(props) {

    const [showIsFavorite, setShowIsFavorite] = useState(props.isFavorite);

    function handleClickFavorite() {
        setShowIsFavorite(!showIsFavorite);
    }

    return (
        <div className="suggestion-card" style={{backgroundSize: 'cover', backgroundImage: `url(${props.foodImage})`}}>
            <section className="suggestion-body-section">
                <button
                    onClick={handleClickFavorite}
                    className={showIsFavorite ? "isFavorite" : "notFavorite"}>
                </button>

                <section className="suggestion-short-info">
                    <h3 className="suggestion-header">{props.recipeName}</h3>
                    <p className="suggestion-total-time">{props.totalTime}</p>
                </section>
            </section>
        </div >
    )
}

export default SuggestionCards;