import { useState, createContext } from "react";
import FilterData from "../FilterData";

const SearchContext = createContext();


const SearchContextProvider = ({children}) => {
/* Holds states for search-function */
    const [searchValue, setSearchValue] = useState('');
    const [checkbox, setCheckbox] = useState(FilterData);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const handleFilterBySearchInputAndCheckBoxes = (item) => {
        const checkedBoxes = checkbox.filter(checkbox => checkbox.isSelected);
        let isIncluded = [];
        checkedBoxes.forEach(box => {
           isIncluded.push(box.dishType ? item.dishTypes.includes(box.dishType) : true);
           isIncluded.push(box.diet ? item.diets.includes(box.diet) : true);
        })
        isIncluded.push(searchValue ? item.title.toUpperCase().includes(searchValue.toUpperCase()) : true);
        return isIncluded.every(e => e);
     }


    return (
        <SearchContext.Provider value={{searchValue: searchValue,
                                        setSearchValue: setSearchValue,
                                        handleFilterBySearchInputAndCheckBoxes: handleFilterBySearchInputAndCheckBoxes,
                                        checkbox: checkbox,
                                        setCheckbox: setCheckbox,
                                        filteredRecipes: filteredRecipes,
                                        setFilteredRecipes: setFilteredRecipes
          }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;
export {SearchContextProvider};