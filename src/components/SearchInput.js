import "./SearchInput.css"
import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import FilterData from './FilterData';

function SearchInput(props) {
    const { recipeData, setRecipeData } = props;
    const [searchValue, setSearchValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [mealData, setMealData] = useState([]);
    const [title, setTitle] = useState();
    const [checkbox, setCheckbox] = useState(FilterData);

    /*
    let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`

        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data.results);
                //console.log(data.results);
            })
            .catch(() => {
                console.log('error');
            });
    }, [])
    */

    /*Event Handler for Filter List Display*/
    const clickHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    /*Manipulates the state of checkbox to enable the filter funcionality on the checkboxes*/
    const checkboxHandler = (index) => {
        const newCheckbox = [...checkbox];
        newCheckbox[index].isSelected = !newCheckbox[index].isSelected;
        setCheckbox(newCheckbox);
    }

    //Prevents page from rendering with each click on Search Button
    const searchButton = (event) => {
        event.preventDefault();
        SearchInput();
    }


    /*Search input form*/
    return (
        <>
            <form className="recipe-search">
                <input
                    className="recipe-input"
                    type="text"
                    placeholder="Search ingredients"
                    autoComplete="Off"
                    value={searchValue}
                    onChange={(e) => {
                        e.preventDefault();
                        setSearchValue(e.target.value)
                    }} />
                <button
                    className="search-button"
                    type="button"
                    onClick={clickHandler}>Search</button>
                {isVisible &&
                    <div className="recipe-filter">
                        <ol className="filter-list">
                            {checkbox.map((dish, index) =>
                                < li key={index} style={{ listStyleType: "none", color: "white" }}>
                                    <input type="checkbox" onChange={() => checkboxHandler(index)} checked={dish.isSelected} /> {dish.dishType}
                                </li>
                            )}
                        </ol>
                    </div>}

            </form>

            <div className="recipes">

                {recipeData && recipeData.map((recipe) => {
                    searchValue && recipe.filter((item) => {
                        item.title.includes(`${searchValue}`)
                        return < RecipeList key={recipe.id} title={title} setTitle={setTitle} recipe={recipe} />
                    })
                    return <RecipeList key={recipe.id} title={title} setTitle={setTitle} recipe={recipe} />
                })}

            </div>

        </>
    );
}

export default SearchInput;
