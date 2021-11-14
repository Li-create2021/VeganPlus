import "./SearchInput.css"
import { Switch, Route } from 'react-router-dom'; // leave for now pls
import React, { useState } from 'react'; //O
import RecipeList from './RecipeList';
import FilterData from './FilterData';
//import Form from './atoms/Form';
import Button from './atoms/Button';
import RecipeInformation from "./RecipeInformation";

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

    /* Handles the onChange function of input*/
    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
        e.target.value ? setIsSearchValue(false) : setIsSearchValue(true);
        setHide(false);
    }

    console.log(props.pathname === "/");

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
                {hide === false &&
                    <div className="recipes" >
                        {searchValue && 
                            recipeData.filter(item => {

                                return searchValue ? item.summary.includes(`${searchValue}`) : (!searchValue ? true : null)

                            }).map(recipe => {
                                console.log(recipe)
                                return (
                                            <RecipeList searchValue={searchValue} setSearchValue={setIsSearchValue} setHide={setHide} hide={hide} recipe={recipe} key={recipe.id}/>
                                        )
                            })
                        }
                    </div>
                }
            </>
            <Switch>
                <Route exact path={"/Recipes/:id"}>
                    <RecipeInformation recipeData={recipeData}/>
                </Route>
            </Switch>

        </>
    );
}

export default SearchInput;