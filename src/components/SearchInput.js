import React from 'react';
import "./SearchInput.css"
import { useState } from 'react';
import FilterData from "./FilterData";

function SearchInput(props) {
    const { searchValue, setSearchValue } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [mealData, setMealData] = useState(null);
    {/*const [dishType, setDishType] = useState(Breakfast);
    const [ingredient, setIngredient] = useState("");*/}

    {/*function handleChange(e) {
    setMealIngredient(e.target.value);*/}

    {/*Event Handler for Filter List Display*/ }
    const clickHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    {/*Search input form*/ }
    return (
        <form id="recipe-search" style={{ backgroundSize: 'cover', backgroundImage: `url(${recipe.image})` }}>
            <input
                type="text"
                placeholder="Search ingredients"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={clickHandler}>Filter</button>
            {isVisible &&
                <div className="recipe-filter">
                    <ul className="filter-list">
                        {FilterData.map((dish, index) =>
                            < li key={index} style={{ listStyleType: "none", color: "white" }}>
                                <input type="checkbox" /> {dish.dishType}
                            </li>
                        )}
                    </ul>
                </div >}
        </form>
    );

}

export default SearchInput;
