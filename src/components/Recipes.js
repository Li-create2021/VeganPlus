import RecipeList from "./RecipeList";
import {nanoid} from 'nanoid';

function Recipes({recipeData}) {
 
 /*
  function getRecipeInformation() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/home/RecipeInformation");
    }
*/
  
    return (
      <section className="Recipes">
        {recipeData && recipeData.map((recipe) => {
                return (
                  <main>
                    <RecipeList recipe={recipe} key={nanoid()}/>
                    
                    
                  </main>           
                )
                })}
        
      </section>
    );
  }
  
  export default Recipes;