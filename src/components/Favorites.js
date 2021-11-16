// pass props from APP.JS to Favorites
import { Switch, Route} from 'react-router-dom';
import RecipeList from './RecipeList';

const Favorites = ({favRecipes, hide, setHide, showIsFavorite, setShowIsFavorite, addToFavRecipesHandler}) => { 
  return (
    <>
      <h1>Your Favorite Recipes </h1>
      <Switch>
        <Route exact path={"/Favorites"}>
          <section className="recipes">
            {
            favRecipes.map(recipe => {
              return (
                <RecipeList
                  setHide={setHide} 
                  hide={hide} 
                  recipe={recipe} 
                  key={recipe.id}  
                  showIsFavorite={showIsFavorite} 
                  addToFavRecipesHandler={addToFavRecipesHandler}
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

