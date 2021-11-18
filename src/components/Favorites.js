// pass props from APP.JS to Favorites
import { useContext } from 'react';
import { Switch, Route} from 'react-router-dom';
import FavHandlerContext from './context/favHandler';
import RecipeList from './RecipeList';

const Favorites = () => { 

  const { favRecipes } = useContext(FavHandlerContext);
  const isFavorite = () => {
    if (favRecipes === []) {
      return false;
    }
    else {
      return true;
    }
  }

  return (
    <>
      <h1>Your Favorite Recipes </h1>
      {isFavorite() && <p>Start collecting your favorites here!</p>}
      <Switch>
        <Route exact path={"/Favorites"}>
          <section className="recipes">
            {
            favRecipes.map((recipe, index )=> {
              return (
                  <RecipeList
                    recipe={recipe}
                    key={recipe.id}
                  />
              )
            })
            }
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default Favorites;

