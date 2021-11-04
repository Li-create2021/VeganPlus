import {useState} from 'react';
import "./RecipeInformationStyle.css";

function RecipeInformation({ recipe }) {
    const ingredientsInformation = recipe.analyzedInstructions[0].steps.map((item) => item.ingredients);
    const recipeSteps = ingredientsInformation.map((step) => step.map((item) => item.name));
    const ingredient = recipe.nutrition.ingredients;

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
                {}
            </section>

        </div>
    )
}

export default RecipeInformation;
