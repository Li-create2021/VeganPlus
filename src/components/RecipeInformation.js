import "./RecipeInformationStyle.css";

function RecipeInformation({ recipe }) {
    const ingredient = recipe.extendedIngredients;

    return (
        <div className="Recipe-information">
            <header>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} />
            </header>

            <ul className="info-overview">
                <li>Total time: {recipe.readyInMinutes}min</li>
                <li>Health score: {recipe.healthScore}</li>
                <li>Servings: {recipe.servings}</li>
            </ul>

            <section className="ingedients">
                <h2>Insgredients:</h2>
                {ingredient.map((items, index) => {
                    return <li key={`${index}147`}>
                                {`${items.amount} 
                                ${items.unit} 
                                ${items.name}`}
                            </li>
                })}
            </section>

           <section className="ingredient-img">
                {recipe.missedIngredients.map((item, index) => {
                    return (
                        <section key={index}>
                            <img src={`${item.image}`} alt={item.extendedName} />
                            <p>{item.name}</p>
                        </section>
                    )
                })}
            </section>

            <section className="instructions">
                {recipe.analyzedInstructions[0].steps.map((item, index) => {
                    return (
                        <div key={`${index}741`}>
                            <h3>Step {item.number}</h3>
                            <p>{item.step}</p>
                        </div>
                    )
                })}
            </section>

        </div>
    )
}

export default RecipeInformation;