import { Route, Switch } from "react-router";
import RecipeList from "./RecipeList";
import RecipeInformation from "./RecipeInformation";

function Home({ recipeData, hide, setHide }) {
   
    return (
      <Switch>
        <Route exact path={"/"}>
      <section className="Home">
          <h1>A little inspiration?</h1>
        {recipeData &&
          recipeData.slice(0, 2).map((recipe, index) => {
            return (
              <RecipeList setHide={setHide} hide={hide} recipe={recipe} key={recipe.id} />
            )
          })
        }
      </section>
      </Route >
      <Route exact path={"/Recipes/:id"}>
        <RecipeInformation recipeData={recipeData}/>
      </Route>
      </Switch>
    );
  }
  
  export default Home;


  