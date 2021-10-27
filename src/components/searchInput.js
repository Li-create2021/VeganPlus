import React from 'react';

const searchInput = () => {

    return (
        <form className="recipe-search-input">
            <label for="search">search</label>
            <input type="search" id="recipe-search" value="Fajitas" />
        </form>
    )
}
export default searchInput;