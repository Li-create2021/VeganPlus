import "./RecipeInformationStyle.css";

function RecipeInformation({ recipe }) {

    return (
        <div className="Recipe-information">
            <header>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} />
            </header>
            
            <ul className="info-overview">
                <li>{recipe.readyInMinutes}</li>
                <li>{recipe.healthScore}</li>
                <li>{recipe.servings}</li>
            </ul>

            <section className="ingedients">
                {/* recipe.analyzedInstructions[0].steps
                    .filter((ing) => ing.ingredients
                    .map((item, index) => {
                        return (
                            <ul>
                                <li>{item.name}</li>
                            </ul>
                        )
                })) */}
            </section>

        </div>
    )
}

export default RecipeInformation;
