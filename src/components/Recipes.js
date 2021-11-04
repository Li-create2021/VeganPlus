import RecipeList from "./RecipeList";

function Recipes({recipeData}) {
   
    return (
      <section className="Recipes">
        {recipeData && recipeData.map((recipe) => {
                return (
                    <RecipeList key={recipe.id} recipe={recipe} />
                )
                })}
        
      </section>
    );
  }
  
  export default Recipes;
