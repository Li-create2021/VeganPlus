import { useState, createContext, useContext } from "react";
import FilterData from "../FilterData";

const SearchContext = createContext();


const SearchContextProvider = ({children}) => {
    const [searchValue, setSearchValue] = useState('');
    const [checkbox, setCheckbox] = useState(FilterData);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    const handleFilterBySearchInputAndCheckBoxes = (item) => {
        const checkedBoxes = checkbox.filter(checkbox => checkbox.isSelected); //Create and array of checked checkboxes objects
        
        let isIncluded = [];
        // default case: no search input and no checked boxes
        // if searchValue is "" that's falsy
        // if the users has not checked any checkbox, then checkbox.isSelected)[0] is undefined ie falsy
        if (!searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0]) {
            // we keep everything
            return true;
    
            // no searchInput, only checks
        } else if (!searchValue && checkbox.filter(checkbox => checkbox.isSelected)[0]) {
    
            checkedBoxes.forEach(box => {  // loop through the checkedBoxes [{ dishType: 'Lunch', isSelected: true },...]
                item.diets.forEach(element => {
                    if (element.includes(`${box.diet}`)) {
                        isIncluded.push(true);
                    } else {
                        isIncluded.push(false);
                    }
                
                })
                item.dishTypes.forEach(type => { // loop through the array of dish types that is the value of "dishType"
                    if (type.includes(`${box.dishType}`)) { // Trying to match the dish type to each checkedBoxes[?].dishType
                        isIncluded.push(true); // If I'm able to match, then I include it (i.e. I change the value of isIncluded)
                    } else {
                        isIncluded.push(false);
                    }

                })
            })
     
            // searchInput exists but no checks
        } else if (searchValue && !checkbox.filter(checkbox => checkbox.isSelected)[0]) {
    
            // if searchValue is found in the summary then the value is true, otherwise it's false
            isIncluded.push(item.summary.includes(`${searchValue}`));
    
            // searchInput and checks
        } else {
            checkedBoxes.forEach(box => {  // loop through the checkedBoxes [{ dishType: 'Lunch', isSelected: true },...]
                item.diets.forEach(element => {
                    if (element.includes(`${box.diet}`)) {
                        isIncluded.push(true);
                    } else {
                        isIncluded.push(false);
                    }
                
                })
                item.dishTypes.forEach(type => { // loop through the array of dish types that is the value of "dishType"
                    if (type.includes(`${box.dishType}`)) { // Trying to match the dish type to each checkedBoxes[?].dishType
                        isIncluded.push(true); // If I'm able to match, then I include it (i.e. I change the value of isIncluded)
                    } else {
                        isIncluded.push(false);
                    }
                })
            })

            isIncluded.push(item.summary.includes(`${searchValue}`));

        }
        console.log("return value of filter", !isIncluded.find((element) => element === false))
        return !isIncluded.find((element) => element === false)
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