import {createContext, useState} from "react";
import FilterData from "../FilterData";

const SearchContext = createContext();

const SearchContextProvider = ({children}) => {
	const [searchValue, setSearchValue] = useState('');
	const [checkbox, setCheckbox] = useState(FilterData);
	const [filteredRecipes, setFilteredRecipes] = useState([]);

	const handleFilterBySearchInputAndCheckBoxes = (item) => {
		const checkedBoxes = checkbox.filter(checkbox => checkbox.isSelected);
		let isIncluded = [];
		checkedBoxes.forEach(box => {
			isIncluded.push(box.dishType ? item.dishTypes.includes(box.dishType) : true);
			isIncluded.push(box.diet ? item.diets.includes(box.diet) : true);
			// console.log({
			//     itemDishTypes: item.dishTypes,
			//     itemDiets: item.diets,
			//     boxDiet: box.diet,
			//     boxDishType: box.dishType,
			//     dishTypeMatchResult: box.dishType ? item.dishTypes.includes(box.dishType) : true,
			//     dishDietMatchResult: box.diet ? item.diets.includes(box.diet) : true
			// })
		})
		isIncluded.push(searchValue ? item.title.toUpperCase().includes(searchValue.toUpperCase()) : true);
		//console.log("final isIncluded array", isIncluded);
		return isIncluded.every(e => e); // returns true if "every" element is true
	}
	return (
		<SearchContext.Provider value={{
			searchValue: searchValue,
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
