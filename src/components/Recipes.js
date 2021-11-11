import RecipeList from "./RecipeList";
import { Switch, Route} from 'react-router-dom';
import RecipeInformation from "./RecipeInformation";

function Recipes({ recipeData, hide, setHide }) {
  return (
      <Switch>
        <Route exact path={"/Recipes"}>
          <section className="Recipes">
            {recipeData &&
            recipeData.map((recipe, index) => {
              return (
                <RecipeList setHide={setHide} hide={hide} recipe={recipe} key={recipe.id}/>
              )
            })
            }
          </section>
        </Route>
        <Route exact path={"/Recipes/:id"}>
          <RecipeInformation recipeData={recipeData}/>
        </Route>
      </Switch>
  );
}

export default Recipes;