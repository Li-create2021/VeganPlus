import { nanoid } from 'nanoid';
import "./RecipeInformationStyle.css";

function RecipeInformation({ recipe }) {
    const ingredient = recipe.nutrition.ingredients;
    
    // Creates a unique key 
    const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
  }

    console.log(recipe.analyzedInstructions[0].steps);


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
                <h2>Ingredients:</h2>
                {ingredient.map((items, index) => {
                   return <li key={index}>{items.amount} {items.unit} {items.name}</li>
                })}
            </section>

            <section className="instructions">
                {recipe.analyzedInstructions[0].steps.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3 key={index}>Step {item.number}</h3>
                            <p key={index}>{item.step}</p>
                        </div>
                        )
                })}
            </section>

        </div>
    )
}

export default RecipeInformation;
