

const SuggestionCards = (props) => {

    const [showIsFavorite, setShowIsFavorite] = React.useState(props.isFavorite);

    function handleClickFavorite() {
        setShowIsFavorite(!showIsFavorite);
    }

    return (
        <div className="suggestion-card">
            <section className="suggestion-head-section">
                <h3>Patatas Bravas</h3>
                <p>10min</p>
            </section>

            <button
                id="favorite"
                style={isFavorite ? SuggestionCardStyling.isFavorite : SuggestionCardStyling.notFavorite}
                onClick={handleClickFavorite}
                className={showIsFavorite ? "isFavorite" : "notFavorite"}>
            </button>
        </div >
    )
}

export default SuggestionCards;