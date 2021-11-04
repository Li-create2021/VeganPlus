import "./SearchInput.css"
import React, { useState} from 'react';
import RecipeList from './RecipeList';
import FilterData from './FilterData';

function SearchInput(props) {
    const { recipeData, addIdToArrayOfObjects } = props;
    const [searchValue, setSearchValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState();
    const [checkbox, setCheckbox] = useState(FilterData);

    const [filteredRecipeData, setFilteredRecipeData] = useState();

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

                {recipeData && recipeData.map((recipe, index) => {
                    searchValue && recipeData.filter((item) => {
                        setFilteredRecipeData(item.title.includes(`${searchValue}`))
                        return < RecipeList key={index} title={title} setTitle={setTitle} filteredRecipeData={filteredRecipeData} />
                    })
                    return (
                        <section key={recipe.id}>
                            <RecipeList addIdToArrayOfObjects={addIdToArrayOfObjects} title={title} setTitle={setTitle} recipe={recipe} />
                        </section>
                    )
                })}

            </div>

        </>
    );
}

export default SearchInput;

/*
{recipeData && recipeData.map((recipe) => {
    searchValue && recipe.filter((item) => {
        item.title.includes(`${searchValue}`)
        return < RecipeList key={recipe.id} title={title} setTitle={setTitle} recipe={recipe} />
    })
    return <RecipeList key={recipe.id} title={title} setTitle={setTitle} recipe={recipe} />
})}
*/
