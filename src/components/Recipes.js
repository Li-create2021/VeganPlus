import "./RecipeListStyle.css";
import RecipeList from "./RecipeList";
import { Switch, Route } from 'react-router-dom';

/* This component simply is provides information of 
   single recipe and maps out in RecipeList component */

function Recipes({ removeFav, recipeData, hide, setHide, addToFavHandler, favRecipes, setFavRecipes }) {
  return (
      <Switch>
        <Route exact path={"/Recipes"}>
          <section className="recipes">
            {recipeData &&
            recipeData.map((recipe, index) => {
              return (
                <RecipeList 
                  setHide={setHide} 
                  hide={hide} 
                  recipe={recipe} 
                  key={recipe.id}  
                  addToFavHandler={addToFavHandler}
                  favRecipes={favRecipes} 
                  setFavRecipe={setFavRecipes}
                  removeFav={removeFav} />
              )
            })
            }
          </section>
        </Route>
      </Switch>
  );
}

export default Recipes;