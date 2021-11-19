
import "./styles/RecipeInformationStyle.css";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useContext } from "react";
import FavHandlerContext from "./context/favHandler";

const RecipeInformation = () => {
 /* No more props. DATA comes from favHandler.js */
    const { recipeData, checkFav, addToFavHandler, removeFav } = useContext(FavHandlerContext);

/* provides single recipe information */
    let { id } = useParams();
    const recipe = recipeData.find(recipe => recipe.id === id)
    const ingredient = recipe.extendedIngredients;
    const [ showImages, setShowImages] = useState(false);
    const [ showInformation, setShowInformation ] = useState(false);
    
/* Displays information on very bottom page */
    const getInfo = () => {
        setShowInformation(!showInformation)
    }

/* Handles the FAVORITE BUTTON */
    const favHandler = () => {
        if (!checkFav(recipe.id)) {
            addToFavHandler(recipe.id);
        } else if (checkFav(recipe.id)) {
            removeFav(recipe.id);
        }
        
    }


/* IMAGES and RE-Sizing */

    const viewImages = (e) => {
        e.preventDefault();
        setShowImages(!showImages);
    }

    const imgSize = (e) => {
        if (e.target.style.transform === "scale(1.5)") {
            return (
            e.target.style.transform = "scale(1)",
            e.target.style.transition = "transform 0.25s ease")
        }
        else {
            return (
            e.target.style.transform = "scale(1.5)",
            e.target.style.transition = "transform 0.25s ease" )
        }

    }

    return (

        <div className="recipe-information">
            <header className="info-header">
                <h1>{recipe.title}</h1>

{/***** Filter for breakfast, lunch & dinner *****/}

            <section className="dish-types-and-allergies">
                { /* Gluten free icon */
                    recipe.glutenFree ? <img className="gluten-free-icon" src="https://cdn-icons-png.flaticon.com/512/1410/1410591.png" alt="gluten free"/> : null
                }

                <section className="dish-types">
                    {recipe.dishTypes
                        .filter((dish) => dish.includes("breakfast"))
                        .map((element, index) => <p key={index} className="breakfast">breakfast</p>)
                    }
                    
                    {recipe.dishTypes
                        .filter((dish) => dish.includes("lunch"))
                        .map((element, index) => <p key={index} className="lunch">lunch</p>)
                    }
                    
                    {recipe.dishTypes
                        .filter((dish) => dish.includes("dinner"))
                        .map((element, index) => <p key={index} className="dinner">dinner</p>)
                    }

                    {recipe.dishTypes
                        .filter((dish) => dish.includes("side dish"))
                        .map((element, index) => <p key={index} className="side-dish">side dish</p>)
                    }

                    {recipe.dishTypes
                        .filter((dish) => dish.includes("snack"))
                        .map((element, index) => <p key={index} className="snack">side dish</p>)
                    }

                    {recipe.dishTypes
                        .filter((dish) => dish.includes("soup"))
                        .map((element, index) => <p key={index} className="soup">side dish</p>)
                    }

                    {recipe.dishTypes
                        .filter((dish) => dish.includes("dessert"))
                        .map((element, index) => <p key={index} className="dessert">side dish</p>)
                    }

                    {recipe.dishTypes
                        .filter((dish) => dish.includes("sauce"))
                        .map((element, index) => <p key={index} className="sauce">side dish</p>)
                    }

                    {recipe.dishTypes
                        .filter((dish) => dish.includes("drink"))
                        .map((element, index) => <p key={index} className="drink">side dish</p>)
                    }
                </section>
            </section>


{/**************  MAIN IMAGE on top of information  *********************/}      
                
                <img className="main-image" src={recipe.image} alt={recipe.title} />
                
                <button
                    className={checkFav(recipe.id) ? "isFavorite" : "notFavorite"}
                    onClick={() => favHandler()}
                />
                    
            </header>

{/********     Displays cookingtime, servings and health score    ************/}
            <ul className="info-overview">
                <li className="overview-list">Total time: {recipe.readyInMinutes}min</li>
                <li className="overview-list">Health score: {recipe.healthScore}</li>
                <li className="overview-list">Servings: {recipe.servings}</li>
            </ul>


{/********     List of ingredients     ************/}
            <section className="ingredients">
                <h2>Ingredients:</h2>
                {ingredient.map((items, index) => {
                    return <li className="ingredients-list" key={`${index}147`}>
                                {`${items.measures.metric.amount} 
                                ${items.measures.metric.unitShort}        
                                ${items.name}`}
                            </li>
                })}
            </section>


{/********     Button to view images and image mapping     ************/}
            <button className="view-image" onClick={(e) => viewImages(e)} >View picture</button>
            
            {showImages &&
                <section className="ingredient-img-section">
                    {recipe.missedIngredients.map((item, index) => {
                        return (
                            <section className="ingredient-image-frame" key={index}>
                                <img onMouseDown={(e) => imgSize(e)} className="ingredient-image" src={`${item.image}`} alt={item.extendedName} />
                                <p className="ingredient-image-name" >{item.name}</p>
                            </section>
                        )
                    })}
                </section>
            }


{/********     Maps out all steps     ************/}
            <section className="instructions">
                {recipe.analyzedInstructions[0].steps.map((item, index) => {
                    
                    return (
                        <section key={`${index}741`}>
                            <h3>Step {item.number}</h3>
                            <p>{item.step}</p>
                        </section>
                    )
                })}
            </section>


{/********     Information drop-down     ************/}
            <img className="info-icon" src="https://cdn-icons.flaticon.com/png/512/3766/premium/3766220.png?token=exp=1636895696~hmac=4000b0c71628b5540fdf2bf1c34f6732" alt="information" onClick={(e) => getInfo(e)}/> 
            {showInformation &&
                <>
                    <h2>Information</h2>
                    <h3>Big thanks to {`${recipe.sourceName}`}</h3>
                    <p>for beeing so kind to let us share their recipe.</p>
                    <p>Original recipe: <a href={`${recipe.sourceUrl}`}>link</a></p>

                    <h3>Also big thanks to <a href="https://spoonacular.com/">Spoonacular</a>!</h3>
                    <p>Provider of the data. (The API)</p>
                    <p>data source: </p>
                    <a href={`${recipe.spoonacularSourceUrl}`}>{`${recipe.spoonacularSourceUrl}`}</a>
                </>
            }
        </div>
    )
}

export default RecipeInformation;