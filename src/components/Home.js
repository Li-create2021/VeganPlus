import { Route, Switch } from "react-router";
import RecipeList from "./RecipeList";

function Home({ recipeData, hide, setHide }) {
   
    return (
      <Switch>
        <Route exact path={"/"}>
          <h1>A little inspiration?</h1>
        <section className="recipes">
          {recipeData &&
            recipeData.slice(0, 2).map((recipe, index) => {
              return (
                <RecipeList setHide={setHide} hide={hide} recipe={recipe} key={recipe.id} />
              )
            })
          }
        </section>
      </Route >
      
      </Switch>
    );
  }
  
  export default Home;


  