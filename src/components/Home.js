import { Route, Switch } from "react-router";
import { useContext } from 'react';
import SearchContext from "./context/search";
import RecipeList from "./RecipeList";
import FavHandlerContext from "./context/favHandler";

function Home() {
  const { recipeData } = useContext(FavHandlerContext);
  const { searchValue, checkbox, handleFilterBySearchInputAndCheckBoxes } = useContext(SearchContext);

    return (
      <Switch>
        <Route exact path={"/"}>
            {!searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0] &&
              <h1>A little inspiration?</h1>
            }

            <section className="recipes">
              {!searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0] && recipeData &&
                recipeData.slice(0, 2).map((recipe, index) => {
                  return (
                    <RecipeList 
                      recipe={recipe} 
                      key={recipe.id}  />
                  )
                })
              }
              {searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0] && recipeData &&
                  recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map(recipe => {
                      return (
                          <RecipeList 
                          recipe={recipe} 
                          key={recipe.id}  />
                      )
                  })
              }
              {!searchValue && checkbox.filter(checkbox => checkbox.isSelected)[0] && recipeData &&
                  recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map(recipe => {
                      return (
                          <RecipeList 
                          recipe={recipe} 
                          key={recipe.id}  />
                      )
                  })
              }
              {searchValue && checkbox.filter(checkbox => checkbox.isSelected)[0] && recipeData &&
                  recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map(recipe => {
                      return (
                          <RecipeList 
                          recipe={recipe} 
                          key={recipe.id}  />
                      )
                  })
              }
          </section>
        </Route>
    </Switch>
    );
  }
  
  export default Home;


  