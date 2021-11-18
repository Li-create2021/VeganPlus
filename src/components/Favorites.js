// pass props from APP.JS to Favorites
import { Switch, Route} from 'react-router-dom';
import RecipeList from './RecipeList';

const Favorites = ({favRecipes, removeFav, hide, setHide, addToFavHandler, searchValue, setSearchValue}) => { 
  
  return (
    <>
      <h1>Your Favorite Recipes </h1>
      <Switch>
        <Route exact path={"/Favorites"}>
          <section className="recipes">
            {
            favRecipes.map((recipe, index )=> {
              return (
                  <RecipeList
                    setHide={setHide} 
                    hide={hide} 
                    recipe={recipe} 
                    removeFav={removeFav} 
                    addToFavHandler={addToFavHandler}
                    favRecipes={favRecipes}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue} 
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

