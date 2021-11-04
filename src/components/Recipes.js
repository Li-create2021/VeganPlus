import RecipeList from "./RecipeList";



import { useHistory } from "react-router-dom"

function Recipes({ recipeData }) {


  return (
    <section className="Recipes">
      {recipeData && recipeData.map((recipe) => {
        return (
          <section key={recipe.id}>
            <RecipeList recipe={recipe} />
          </section>
        )
      })}

    </section>
  );
}

export default Recipes;