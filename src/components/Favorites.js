// pass props from APP.JS to Favorites
import { Switch, Route} from 'react-router-dom';
import RecipeList from './RecipeList';

const Favorites = ({favRecipes, removeFav, hide, setHide, addToFavHandler}) => { 

const checkFav = (id) => {
  if (favRecipes.find(element => element.id === id)) {
      return true;
  } else {
      return false; 
  }
}
  
  return (
    <>
      <h1>Your Favorite Recipes </h1>
      <Switch>
        <Route exact path={"/Favorites"}>
          <section className="recipes">
            {
            favRecipes.map((recipe, index )=> {
              return (
                <section key={recipe.id}  >
                  <RecipeList
                    setHide={setHide} 
                    hide={hide} 
                    recipe={recipe} 
                    removeFav={removeFav} 
                    addToFavHandler={addToFavHandler}
                    favRecipes={favRecipes}
                  />
                  {checkFav &&
                  <button onClick={() => removeFav(recipe.id)}>remove from Favs</button>}
                  </section>
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

