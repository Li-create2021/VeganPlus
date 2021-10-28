const SuggestionCardStyling = {
    isFavorite: {
        width: "40px",
        height: "40px",
        backgroundImage: url("https://upload.wikimedia.org/wikipedia/commons/3/35/Emoji_u2665.svg"),
        backgroundSize: "100%",
        alignSelf: "flex-start"
    },

    notFavorite: {
        width: "40px",
        height: "40px",
        backgroundImage: url("https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg"),
        backgroundSize: "100%",
        alignSelf: "flex-start"
    },
    suggestionCard: {
        border: "2px black solid",
        borderRadius: "5px"
    },
    favorite: {
        backgroundImage: url('https://cdn.gutekueche.de/upload/rezept/5811/patatas-bravas-mit-aioli.jpg')
    }
}

export default SuggestionCardStyle;