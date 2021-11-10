import RecipeList from "./RecipeList";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function Recipes({ recipeData, hide, setHide }) {
   
    return (
      <section className="Recipes">
        {recipeData &&
          recipeData.map((recipe, index) => {
            return (
              <Router key={recipe.id}>
                  <Switch>
                    <Route path={"/Recipes"}>
                      <RecipeList setHide={setHide} hide={hide} recipe={recipe} />
                    </Route>
                  </Switch>
              </Router>
            )
          })
        }
      </section>
    );
  }
  
  export default Recipes;


  