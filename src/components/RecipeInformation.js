import {useState} from 'react';
import "./RecipeInformationStyle.css";

function RecipeInformation({ recipe, ingredient }) {
    const ingredientsInformation = recipe.analyzedInstructions[0].steps.map((item) => item.ingredients);
    const recipeSteps = ingredientsInformation.map((step) => step.map((item) => item.name));
    

    console.log(ingredientsInformation.map((step) => step.map((item) => item.name)));


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
                {ingredient.map((items, index) => {
                    <li key={index}>{items}</li>
                })}
            </section>

        </div>
    )
}

export default RecipeInformation;
