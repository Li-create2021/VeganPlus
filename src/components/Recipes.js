import RecipeList from "./RecipeList";



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
                    <RecipeList key={recipe.id} recipe={recipe} />
                )
                })}
        
      </section>
    );
  }
  
  export default Recipes;