import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import SearchContext from './context/search';
import "./RecipeListStyle.css";
import Section from './atoms/Section';


function RecipeList({ recipe, removeFav, setHide, addToFavHandler, favRecipes }) {
    const { setSearchValue } = useContext(SearchContext);
    const [showIsFavorite, setShowIsFavorite] = useState(false);
    let history = useHistory();

    function clickHandler() {
        setSearchValue("");
        setHide(true);
        history.push(`/Recipes/${recipe.id}`);
    }

    const checkFav = () => {
        if (favRecipes.find((element) => element.id === recipe.id)) {
            setShowIsFavorite(true);
        } else if (favRecipes.find((element) => element.id !== recipe.id)) {
            setShowIsFavorite(false);
        }
    }

    const favHandler = (event) => {
        event.stopPropagation();
        if (!showIsFavorite) {
            setShowIsFavorite(true); 
            addToFavHandler(recipe.id);
        } else if (showIsFavorite){
            setShowIsFavorite(false);
            removeFav(recipe.id);
        }
        
    }

    return (
        <>
        <Section
            onClick={() =>clickHandler()}
            className="recipe-card"
            style={{ backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`, display: 'flex' }}

        >
                <button
                    onClick={(event) => favHandler(event)}
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
