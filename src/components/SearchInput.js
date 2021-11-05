import "./SearchInput.css"
import React, { useState} from 'react';
import RecipeList from './RecipeList';
import FilterData from './FilterData';

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
                        setSearchValue(e.target.value)
                    }} />

                <button
                    className="search-button"
                    type="button"
                    onClick={clickHandler}
                >                        
                        Search
                </button>

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
            {recipeData && recipeData.filter(item => {
                    // what are your conditions?
                    // if input field is empty and no checkboxes are checked  then return true
                    
                    
                return searchValue ? item.title.includes({searchValue}) : (!searchValue ? true : null)
                        
                    
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
