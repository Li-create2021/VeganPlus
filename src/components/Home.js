import RecipeList from "./RecipeList";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function Home({ recipeData, hide, setHide }) {
   
    return (
      <section className="Home">
          <h1>A little inspiration?</h1>
        {recipeData &&
          recipeData.map((recipe, index) => {
            return (
              <RecipeList setHide={setHide} hide={hide} recipe={recipe} key={recipe.id} />
            )
          })
        }
      </section>
    );
  }
  
  export default Home;


  