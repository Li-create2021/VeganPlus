import { useState } from 'react';
import RecipeInformation from "./RecipeInformation";
import "./SuggestionCardStyle.css";

function RecipeList({ recipe, addIdToArrayOfObjects }) {
    const [isVisible, setIsVisible] = useState(false);

    // Creates a unique key
    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
      }

    const clickHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }


    return (
        <section 
            key={recipe.id}
            className="suggestion-card" 
            style={{backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`}}
            onClick={clickHandler} >

            <section className="suggestion-body-section">
                <section className="suggestion-short-info">
                    <h3 className="suggestion-header">{recipe.title}</h3>
                    <p className="suggestion-total-time">{recipe.readyInMinutes}min</p>
                </section>
            </section>

        {isVisible && 
            <section key={addIdToArrayOfObjects}>
                <RecipeInformation recipe={recipe}/> 
            </section>
        }
        
        </section>
    )

}

export default RecipeList;
