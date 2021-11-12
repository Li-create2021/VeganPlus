import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./RecipeListStyle.css";
import Section from './atoms/Section';


function RecipeList({ recipe, setHide}) {
    let history = useHistory();
    const [showIsFavorite, setShowIsFavorite] = useState(false);

    function handleClickFavorite() {
    setShowIsFavorite(!showIsFavorite);
    }

    function clickHandler() {
        history.push(`/Recipes/${recipe.id}`)
        setHide(true);
    }

    return (
        <>
            <Section
                onClick={clickHandler}
                className="recipe-card"
                style={{ backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`, display: 'flex' }}

            >
                    <button
                        id="favorite"
                        onClick={handleClickFavorite}
                        className={showIsFavorite ? "isFavorite" : "notFavorite"}
                    ></button>
                    
                    <h3 className="recipe-header">{recipe.title}</h3>
                    <h3 className="recipe-total-time">{recipe.readyInMinutes}min</h3>
            </Section>

        </>
    )

}

export default RecipeList;
