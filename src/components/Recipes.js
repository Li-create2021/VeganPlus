import RecipeList from "./RecipeList";

function Recipes({ recipeData }) {

  return (
    <section className="Recipes">
      {recipeData &&
        recipeData.map((recipe, index) => {
          return (
            <section key={recipe.id}>
              <RecipeList recipe={recipe} />
            </section>

          )
        })
      }
    </section>
  );
}

export default Recipes;
