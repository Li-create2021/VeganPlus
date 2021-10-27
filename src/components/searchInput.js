import React from 'react';

function App() {
    return (
        <div style={{
            backgroundImage: `url("https://unsplash.com/photos/1SPu0KT-Ejg")`
        }}>
        </div>
    );
}

const SearchInput = () => {

    return (
        <form className="recipe-search-input">
            <label for="search">search</label>
            <input type="search" id="recipe-search" value="" />
        </form>
    )
}
export default SearchInput;