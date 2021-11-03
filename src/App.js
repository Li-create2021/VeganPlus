import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState, useEffect } from 'react';
import NavFooter from './components/NavFooter';
import './components/NavFooter.css'
import Recipes from './components/Recipes';


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipeData, setRecipesData] = useState(null);
  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`

  useEffect(() => {
    fetch(
      apiUrl
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipesData(data.results);
        console.log(data.results);
      })
      .catch(() => {
        console.log('error');
      });
  }, [])


  return (

    <div className="App">
      <header><img src="https://i.ibb.co/hFhc0y0/WCS-Project-2.png" alt="" className="logo" /></header>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      {recipeData
        .map((recipeData) => recipeData.include(searchValue))}
      <SuggestionSection recipeData={RecipeData} />

      <footer>
        <NavFooter />
      </footer>

    </div >


  );
}

export default App;

