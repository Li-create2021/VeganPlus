import { createContext, useState } from "react";

const FavHandlerContext = createContext();


const FavHandlerContextProvider = ({ children }) => {

    /* Setting states to be accessable globaly */
    const [showIsFavorite, setShowIsFavorite] = useState(false);
    const [favRecipes, setFavRecipes] = useState([]);
    const [recipeData, setRecipesData] = useState(null);
    
    /* Checks if recipe is already a favorite */
    const checkFav = (id) => {
        if (favRecipes.find((element) => element.id === id)) {
            return true
        } else if (favRecipes.find((element) => element.id !== id)) {
            return false
        }
    }

    /* adds current recipe to the array of favoriteRecipes */ 
    function addToFavHandler(id) {  
        const  recipeToAdd = recipeData.find((element) => element.id === id);
        const findDouble = favRecipes.find((itemDouble) => itemDouble.id === recipeToAdd.id);
        if (!findDouble) { 
        setFavRecipes([...favRecipes, recipeToAdd]);
        } 
    }

    /* removes current recipe from array of favoriteRecipes */
    const removeFav = (id) => {
        setFavRecipes(favRecipes.filter((element) => element.id !== id))
    }

    return (
        <FavHandlerContext.Provider value={{showIsFavorite: showIsFavorite, 
                                            setShowIsFavorite: setShowIsFavorite,
                                            favRecipes: favRecipes,
                                            setFavRecipes: setFavRecipes,
                                            checkFav: checkFav,
                                            addToFavHandler: addToFavHandler,
                                            removeFav: removeFav,
                                            recipeData: recipeData,
                                            setRecipesData: setRecipesData}}>
            {children}
        </FavHandlerContext.Provider>
    )
}

export default FavHandlerContext;
export {FavHandlerContextProvider};