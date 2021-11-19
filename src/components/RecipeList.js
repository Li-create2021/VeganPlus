import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import SearchContext from './context/search';
import "./styles/RecipeListStyle.css";
import Section from './atoms/Section';
import FavHandlerContext from './context/favHandler';


function RecipeList({ recipe }) {

    const { searchValue, setSearchValue } = useContext(SearchContext);
    const { checkFav, addToFavHandler, removeFav } = useContext(FavHandlerContext);
    let history = useHistory();

/* on click on card: move to RecipeInformation */
    function clickHandler() {
        searchValue && setSearchValue("");
        history.push(`/Recipes/${recipe.id}`);
    }

/* Handles the favorite button  */
    const favHandler = (event) => {
        event.stopPropagation();

        if (!checkFav(recipe.id)) { //if current recipe is NOT fav, then ADD it as favs
            addToFavHandler(recipe.id);
        } 
        else if (checkFav(recipe.id)) { //if current recipe is ALREADY fav, then REMOVE it from favs
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
                    className={checkFav(recipe.id) ? "isFavorite" : "notFavorite"}
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
