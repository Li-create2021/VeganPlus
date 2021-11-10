import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import RecipeInformation from "./RecipeInformation";
import "./RecipeListStyle.css";

function RecipeList({ recipe, setHide, hide }) {



    return (
        <Router>

           {hide === false && 
           <Link to={`/Recipes/${recipe.id}`} >
                <section
                    onClick={() => setHide(true)}
                    className="recipe-card" 
                    style={{backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`}}
                >
                    <section className="recipe-short-info">
                            <h3 className="recipe-header">{recipe.title}</h3>
                            <p className="recipe-total-time">{recipe.readyInMinutes}min</p>
                    </section>

                </section>
            </Link>}

            <Route path={`/Recipes/${recipe.id}`} >
                    <RecipeInformation recipe={recipe}/>
            </Route>

        </Router>
    )

}

export default RecipeList;
