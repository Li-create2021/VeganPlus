import "./RecipeListStyle.css";
import RecipeList from "./RecipeList";
import { Switch, Route } from 'react-router-dom';
import SearchContext from "./context/search";
import { useContext } from "react";

/* This component simply is provides information of 
   single recipe and maps out in RecipeList component */

function Recipes({ removeFav, recipeData, hide, setHide, addToFavHandler, favRecipes, setFavRecipes }) {
  const { handleFilterBySearchInputAndCheckBoxes, checkbox } = useContext(SearchContext);
  const { searchValue, setSearchValue, filteredRecipes, setFilteredRecipes } = useContext(SearchContext);
  
  
  return (
      <Switch>
        <Route exact path={"/Recipes"}>
          <section className="recipes">


            {recipeData &&
                recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map(recipe => {
                    return (
                        <RecipeList 
                        searchValue={searchValue} 
                        setSearchValue={setSearchValue} 
                        setHide={setHide}
                        hide={hide} 
                        recipe={recipe} 
                        key={recipe.id} 
                        addToFavHandler={addToFavHandler}
                        removeFav={removeFav}
                        favRecipes={favRecipes} />
                    )
                })
            }

         

          </section>
        </Route>
      </Switch>
  );
}

export default Recipes;