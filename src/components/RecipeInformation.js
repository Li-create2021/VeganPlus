import { nanoid } from 'nanoid';
import "./RecipeInformationStyle.css";

function RecipeInformation({ recipe }) {
    const ingredient = recipe.nutrition.ingredients;

    console.log(recipe.analyzedInstructions[0].steps);


    return (
        <div className="Recipe-information">
            <header>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} />
            </header>
            
            <ul className="info-overview">
                <li key={nanoid()}>Total time: {recipe.readyInMinutes}min</li>
                <li key={nanoid()}>Health score: {recipe.healthScore}</li>
                <li key={nanoid()}>Servings: {recipe.servings}</li>
            </ul>

            <section className="ingedients">
                <h2>Ingredients:</h2>
                {ingredient.map((items) => {
                   return <li key={nanoid()}>{items.amount} {items.unit} {items.name}</li>
                })}
            </section>

            <section className="instructions">
                {recipe.analyzedInstructions[0].steps.map((item) => {
                    return (
                        <>
                        <h3 key={nanoid()}>Step {item.number}</h3>
                        <p key={nanoid()}>{item.step}</p>
                        </>
                        )
                })}
            </section>

        </div>
    )
}

export default RecipeInformation;
