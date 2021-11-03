import React from 'react';
import "./SearchInput.css"
import Filter from './Filter'
import { useState } from 'react';

function SearchInput(props) {
    const { searchValue, setSearchValue } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [mealData, setMealData] = useState(null);
    {/*const [dishType, setDishType] = useState(Breakfast);
const [ingredient, setIngredient] = useState("");*/}

    {/*function getMealData() {
        fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=37cd85a2df4c426685057ae2162f7e75&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`
        )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data.results);
                console.log(data.results);
            })
            .catch(() => {
                console.log("error");
            });
    }*/}

    {/*function handleChange(e) {
    setMealIngredient(e.target.value);*/}

    {/*Event Handler for Filter List Display*/ }
    const clickHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }
    {/*Search input form*/ }
    return (
        <form id="recipe-search">
            <input
                type="text"
                placeholder="Search ingredients"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={clickHandler}>Filter</button>
            {isVisible && <Filter />}
        </form>
    );

}

export default SearchInput;