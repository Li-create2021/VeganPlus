import "./SearchInput.css"
import React, { useState, useEffect } from 'react';

function SearchInput(props) {
    const { searchValue, setSearchValue, checkbox, setCheckbox } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [mealData, setMealData] = useState(null);
    console.log(mealData);
    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`

        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data.results);
                console.log(data.results);
            })
            .catch(() => {
                console.log('error');
            });
    }, [])

    //Event Handler for Filter List Display
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
    /*Search input form*/ 
    return (
        <form id="recipe-search">
            <input
                type="text"
                placeholder="Search ingredients"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={clickHandler}>Search</button>
            {isVisible &&
                <div className="recipe-filter">
                    <ol className="filter-list">
                        {checkbox.map((dish, index) =>
                            < li key={index} style={{ listStyleType: "none", color: "white" }}>
                                <input type="checkbox" onChange={() => checkboxHandler(index)} checked={dish.isSelected} /> {dish.dishType}
                            </li>
                        )}
                    </ol>
                </div >}
        </form>
    );

}

export default SearchInput;
