import "./SearchInput.css"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React, { useState} from 'react';
import RecipeList from './RecipeList';
import FilterData from './FilterData';

function SearchInput(props) {
    
  const [searchValue, setSearchValue] = useState("");
    const { recipeData, setIsSearchValue, hide, setHide } = props;
    const [isVisible, setIsVisible] = useState(false);
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
            {hide === false && 
                <form className="recipe-search"
                    onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <input
                    className="recipe-input"
                    type="text"
                    placeholder="Search ingredients"
                    autoComplete="Off"
                    value={searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                        e.target.value ? setIsSearchValue(false) : setIsSearchValue(true)
                    }} 
                    
                    />

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
            </form>}

            <div className="recipes">
            {searchValue && recipeData.filter(item => {
                    // what are your conditions?
                    // if input field is empty and no checkboxes are checked  then return true
                    console.log(typeof(item.title))
                    
                return searchValue ? item.summary.includes(`${searchValue}`) : (!searchValue ? true : null)
                        
                    
                }).map(recipe => {      
                    console.log(recipe)
                    return(
                        <Router key={recipe.id}>
                            <Switch>
                            <Route path={"/Recipes"}>
                                <RecipeList setHide={setHide} hide={hide} recipe={recipe} isVisible={isVisible}/>
                            </Route>
                            </Switch>
                        </Router>
                    )
                })
            }

            </div>

        </>
    );
}

export default SearchInput;
