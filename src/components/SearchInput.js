import "./SearchInput.css"
import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import FilterData from './FilterData';
//import Form from './atoms/Form';
import Button from './atoms/Button';
import RecipeInformation from "./RecipeInformation";
import RecipeList from './RecipeList';


function SearchInput(props) {

    const [searchValue, setSearchValue] = useState("");
    const { recipeData, setIsSearchValue, hide, setHide, favRecipes, addToFavHandler, removeFav } = props;
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



    /* Handles the onChange function of input*/
    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
        e.target.value ? setIsSearchValue(false) : setIsSearchValue(true);
        setHide(false);
    }

    const handleFilterBySearchInputAndCheckBoxes = (item) => {
        const checkedBoxes = checkbox.filter(checkbox => checkbox.isSelected); //Create and array of checked checkboxes objects

        let isIncluded = false;
        // default case: no search input and no checked boxes
        // if searchValue is "" that's falsy
        // if the users has not checked any checkbox, then checkbox.isSelected)[0] is undefined ie falsy
        if (!searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0]) {
            // we keep everything
            isIncluded = true

            // no searchInput, only checks
        } else if (!searchValue && checkbox.filter(checkbox => checkbox.isSelected)[0]) {

            checkedBoxes.forEach(box => {  // loop through the checkedBoxes [{ dishType: 'Lunch', isSelected: true },...]
                item.dishTypes.forEach(type => { // loop through the array of dish types that is the value of "dishType"
                    if (type === box.dishType) { // Trying to match the dish type to each checkedBoxes[?].dishType
                        isIncluded = true // If I'm able to match, then I include it (i.e. I change the value of isIncluded)
                    }
                })
            })

            // searchInput exists but no checks
        } else if (searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0]) {

            // if searchValue is found in the summary then the value is true, otherwise it's false
            isIncluded = item.summary.includes(`${searchValue}`)

            // searchInput and checks
        } else {
            checkedBoxes.forEach(box => {  // loop through the checkedBoxes [{ dishType: 'Lunch', isSelected: true },...]
                item.dishTypes.forEach(type => { // loop through the array of dish types that is the value of "dishType"
                    if (type.includes(`${box.dishType}`) && item.summary.includes(`${searchValue}`)) { // Trying to match the dish type to each checkedBoxes[?].dishType AND trying to find searchInput in summary
                        isIncluded = true // If I'm able to match, then I include it (i.e. I change the value of isIncluded)
                    }
                })
            })

        }
        return isIncluded
    }

    /*Search input form*/
    return (
        <>
            <form pathname={props.pathname}
                onSubmit={(e) => e.preventDefault()}>

                <input
                    className="recipe-input"
                    type="text"
                    placeholder="Search ingredients"
                    autoComplete="Off"
                    value={searchValue}
                    onChange={(e) => onChangeHandler(e)}
                />

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
                    </div>
                }
            </form>

            <>
                {
                    <div className="recipes" >
                        {searchValue && recipeData &&
                            recipeData.filter(item => handleFilterBySearchInputAndCheckBoxes(item)).map(recipe => {
                                return (
                                    <RecipeList 
                                    searchValue={searchValue} 
                                    setSearchValue={setIsSearchValue} 
                                    setHide={setHide}
                                    hide={hide} 
                                    recipe={recipe} 
                                    key={recipe.id} 
                                    addToFavHandler={addToFavHandler}
                                    removeFav={removeFav}
                                    favRecipes={favRecipes} />
                                )
                            })
                        }
                    </div>
                }
            </>
            <Switch>
                <Route exact path={"/Recipes/:id"}>
                    <RecipeInformation recipeData={recipeData} addToFavHandler={addToFavHandler} />
                </Route>
            </Switch>

        </>
    );
}


export default SearchInput;