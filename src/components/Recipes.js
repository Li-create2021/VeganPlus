import {useState} from "react"
import RecipeList from "./RecipeList";

function Recipes({recipeData}) {

  
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