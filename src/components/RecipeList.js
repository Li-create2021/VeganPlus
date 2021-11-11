import { useHistory } from 'react-router-dom';
import RecipeInformation from "./RecipeInformation";
import "./RecipeListStyle.css";
import Section from './atoms/Section';

function RecipeList({ recipe, setHide, hide }) {
    let history = useHistory();

    function clickHandler() {
        setHide(true);
        history.push(`/Recipes/${recipe.id}`)
    }

    return (
        <>

            {hide === false &&
                
                    <Section
                        onClick={clickHandler}
                        className="recipe-card"
                        style={{ backgroundSize: 'cover', backgroundImage: `url(${recipe.image})`, display: 'flex' }}

                    >
                        <Section RecipeCardInfo>
                            <h3 className="recipe-header">{recipe.title}</h3>
                            <p className="recipe-total-time">{recipe.readyInMinutes}min</p>
                        </Section>

                    </Section>
            }
        </>
    )

}

export default RecipeList;
