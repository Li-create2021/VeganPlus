import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import "./RecipeListStyle.css";
import Section from './atoms/Section';


function RecipeList({ recipe, setHide, addToFavHandler, favRecipes, removeFav }) {
    
    const [showIsFavorite, setShowIsFavorite] = useState(false);
    let history = useHistory();

    function clickHandler() {
        setHide(true);
        history.push(`/Recipes/${recipe.id}`)
    }

    const favHandler = () => {
        setShowIsFavorite(!showIsFavorite); 
        addToFavHandler(recipe.id);
    }
    
    const checkFav = () => {
        if (favRecipes.find(element => element.id === recipe.id)) {
            return true;
        } else {
            return false; 
        }
    }

    return (
        <>
        <Section
            onClick={clickHandler}
            className="recipe-card"
            style={{ backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`, display: 'flex' }}

        >
                <button
                    onClick={() => favHandler()}
                    className={checkFav ? "isFavorite" : "notFavorite"}
                />

                <h3 className="recipe-header">{recipe.title}</h3>
                <h3 className="recipe-total-time">{recipe.readyInMinutes}min</h3>
                
                { /* Gluten free icon */
                    recipe.glutenFree ? <img className="gluten-free-icon" src="https://cdn-icons-png.flaticon.com/512/1410/1410591.png" alt="gluten free"/> : null
                }
        </Section>
        </>
    )

}

export default RecipeList;
