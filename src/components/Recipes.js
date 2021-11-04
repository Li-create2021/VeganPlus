import RecipeList from "./RecipeList";



import {useHistory} from "react-router-dom"

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
        {recipeData && recipeData.map((recipe, index) => {
                return (
                  <main>
                    <RecipeList recipe={recipe} key={index}/>
                    
                    
                  </main>           
                )
                })}
        
      </section>
    );
  }
  
  export default Recipes;