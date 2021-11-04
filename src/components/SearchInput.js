import React from 'react';
import "./SearchInputImg.css"
import Filter from './Filter'
import { useState } from 'react';

function SearchInput(props) {
    const { searchValue, setSearchValue } = props;
    const [isVisible, setIsVisible] = useState(false);

    const clickHandler = (event) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    return (
        <form id="recipe-search">
            <input type="text" placeholder="Search ingredients" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <button onClick={clickHandler}>Filter</button>
            {isVisible && <Filter />}
        </form>
    );

}

export default SearchInput;
