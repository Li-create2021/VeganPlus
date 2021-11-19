import "./styles/SearchInput.css"
import React, { useContext, useState } from 'react';
import Button from './atoms/Button';
import SearchContext from "./context/search";


function SearchInput(props) {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const {checkbox, setCheckbox} = useContext(SearchContext);
    const [isVisible, setIsVisible] = useState(false);

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
    }

/*Search input form*/
    return (
        <>
        {props.pathname !== "/Favorites" &&
            <form className="search-input" pathname={props.pathname}
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
                    Filter
                </Button>

                {isVisible &&
                    <div className="recipe-filter">
                        <ol className="filter-list">

                            {checkbox.map((dish, index) =>
                                < li key={index} style={{ listStyleType: "none", color: "white", width: "120px" }}>

                                    <input type="checkbox" onChange={() => checkboxHandler(index)} checked={dish.isSelected} /> {dish.dishType || dish.diet}

                                </li>
                            )}
                        </ol>
                    </div>
                }
            </form>}
        </>
    );
}


export default SearchInput;
