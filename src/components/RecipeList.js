import { useState } from 'react';
import RecipeInformation from "./RecipeInformation";
import "./RecipeListStyle.css";

function RecipeList({ recipe }) {
    const [isVisible, setIsVisible] = useState(false);

    const clickHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }


    return (
        <section
            
            className="recipe-card" 
            style={{backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`}}
            onClick={clickHandler} 
        >

            <section className="recipe-body-section">
                <section className="recipe-short-info">
                    <h3 className="recipe-header">{recipe.title}</h3>
                    <p className="recipe-total-time">{recipe.readyInMinutes}min</p>
                </section>
            </section>

            {isVisible && 
                <section >
                    <RecipeInformation recipe={recipe}/> 
                </section>
            }
        
        </section>
    )

}

export default RecipeList;
