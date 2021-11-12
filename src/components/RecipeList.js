import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import RecipeInformation from "./RecipeInformation";
import "./RecipeListStyle.css";
import Section from './atoms/Section';

function RecipeList({ recipe, setHide, hide }) {

    return (
        <Router>

            {hide === false &&
                <Link to={`/Recipes/${recipe.id}`} >
                    <Section
                        onClick={() => setHide(true)}
                        className="recipe-card"
                        style={{ backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`, display: 'flex' }}

                    >

                        <h3 className="recipe-header">
                            {recipe.title}
                        </h3>
                        <h3 className="recipe-total-time">
                            {recipe.readyInMinutes}min
                        </h3>


                    </Section>
                </Link>}

            <Route path={`/Recipes/${recipe.id}`} >
                <RecipeInformation recipe={recipe} />
            </Route>

        </Router>
    )

}

export default RecipeList;
