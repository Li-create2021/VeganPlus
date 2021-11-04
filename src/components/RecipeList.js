import {useState} from 'react';
import RecipeInformation from "./RecipeInformation";
import "./SuggestionCardStyle.css";
import { nanoid } from 'nanoid';

function RecipeList({ recipe }) {
    const [isVisible, setIsVisible] = useState(false);

    const clickHandler = (event) => {
      event.preventDefault();
      setIsVisible(!isVisible);
  }

   console.log(recipe.title)

    return (
        <main 
            className="suggestion-card" 
            style={{backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`}}
            onClick={clickHandler} >
        
            <section className="suggestion-body-section">
               

                <section className="suggestion-short-info">
                    <h3 className="suggestion-header">{recipe.title}</h3>
                    <p className="suggestion-total-time">{recipe.readyInMinutes}min</p>
                </section>
            </section>
        {isVisible && <RecipeInformation key={nanoid()} recipe={recipe}/> }
        
        </main>
    )

}

export default RecipeList;