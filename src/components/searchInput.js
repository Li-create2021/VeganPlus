import React from 'react';
import "./SearchInputImg.css"
import Filter from './Filter'

function SearchInput(props) {
    const { searchValue, setSearchValue } = props;
    return (
        <form id="recipe-search">
            <textarea
                value={searchValue}
                type="text"
                placeholder="Search ingredients and recipes"
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <Filter />
        </form>
    );
}

export default SearchInput;