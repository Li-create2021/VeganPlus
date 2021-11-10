import "./SearchInput.css"
import React, { useState } from 'react';
import RecipeList from './RecipeList';
import FilterData from './FilterData';
import Form from './atoms/Form';
import Button from './atoms/Button';

function SearchInput(props) {
    const { recipeData } = props;
    const [searchValue, setSearchValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState();
    const [checkbox, setCheckbox] = useState(FilterData);

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

    console.log(props.pathname === "/");

    /*Search input form*/
    return (
        <>
            <Form pathname={props.pathname}>
                <input
                    className="recipe-input"
                    type="text"
                    placeholder="Search ingredients"
                    autoComplete="Off"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value)
                    }} />

                <Button
                    className="search-button"
                    type="button"
                    onClick={clickHandler}
                >
                    Search
                </Button>

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
            </Form>

            <div className="recipes">
                {recipeData && recipeData.filter(item => {
                    return searchValue ? item.title.includes({ searchValue }) : (!searchValue ? true : null)
                }).map(recipe => (
                    <section key={recipe.id}>
                        <RecipeList title={title} setTitle={setTitle} recipe={recipe} />
                    </section>
                ))}

            </div>

        </>
    );
}

export default SearchInput;
