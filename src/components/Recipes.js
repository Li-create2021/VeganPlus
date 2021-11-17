import "./RecipeListStyle.css";
import RecipeList from "./RecipeList";
import { Switch, Route } from 'react-router-dom';
import RecipeInformation from "./RecipeInformation";

/* This component simply is provides information of 
   single recipe and maps out in RecipeList component */

function Recipes({ recipeData, hide, setHide, addToFavHandler, favRecipes, setFavRecipes }) {
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
                  favRecipe={favRecipes} 
                  setFavRecipe={setFavRecipes} />
              )
            })
            }
          </section>
        </Route>
        <Route exact path={"/Recipes/:id"}>
            <RecipeInformation 
                recipeData={recipeData} 
                addToFavHandler={addToFavHandler} 
                favRecipe={favRecipes} 
                setFavRecipes={setFavRecipes} />
        </Route>
      </Switch>
  );
}

export default Recipes;