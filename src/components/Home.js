import { Route, Switch } from "react-router";
import { useContext } from 'react';
import SearchContext from "./context/search";
import RecipeList from "./RecipeList";

function Home({ recipeData, hide, setHide, addToFavHandler, favRecipes, removeFav }) {
 const { searchValue, setSearchValue, handleFilterBySearchInputAndCheckBoxes, checkbox } = useContext(SearchContext);

    return (
      <Switch>
        <Route exact path={"/"}>
          {!searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0] &&
            <h1>A little inspiration?</h1>
          }
          
          <section className="recipes">
            {!searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0] && recipeData &&
              recipeData.slice(0, 3).map((recipe) => {
                return (
                  <RecipeList 
                    setHide={setHide} 
                    hide={hide} 
                    recipe={recipe} 
                    key={recipe.id} 
                    addToFavHandler={addToFavHandler} 
                    favRecipes={favRecipes}
                    removeFav={removeFav} />
                )
              })
            }

          {searchValue && recipeData &&
                recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map(recipe => {
                    return (
                        <RecipeList 
                        searchValue={searchValue} 
                        setSearchValue={setSearchValue} 
                        setHide={setHide}
                        hide={hide} 
                        recipe={recipe} 
                        key={recipe.id} 
                        addToFavHandler={addToFavHandler}
                        removeFav={removeFav}
                        favRecipes={favRecipes} />
                    )
                })
            }
        </section>
      </Route >
      
      </Switch>
    );
  }
  
  export default Home;


  