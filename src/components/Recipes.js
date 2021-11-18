import "./styles/RecipeListStyle.css";
import RecipeList from "./RecipeList";
import { Switch, Route } from 'react-router-dom';
import SearchContext from "./context/search";
import { useContext } from "react";
import FavHandlerContext from "./context/favHandler";

function Recipes() {
  const { handleFilterBySearchInputAndCheckBoxes } = useContext(SearchContext);
  const { recipeData } = useContext(FavHandlerContext)
  
  return (
      <Switch>
        <Route exact path={"/Recipes"}>
          <section className="recipes">


            {recipeData &&
                recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map((recipe, index) => {
                    return (
                        <RecipeList 
                        recipe={recipe} 
                        key={recipe.id}  />
                    )
                })
            }

         

          </section>
        </Route>
      </Switch>
  );
}

export default Recipes;