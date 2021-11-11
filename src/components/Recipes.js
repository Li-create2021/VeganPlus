import RecipeList from "./RecipeList";
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import RecipeInformation from "./RecipeInformation";

function Recipes({ recipeData, hide, setHide }) {
  let { path } = useRouteMatch();
  console.log(path)

  return (
      <Switch>
        <Route exact path={path}>
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
        <Route exact path={`${path}/:id`}>
          <RecipeInformation recipeData={recipeData}/>
        </Route>
      </Switch>
  );
}

export default Recipes;



