import SearchInput from './components/SearchInput';
import { useState, useEffect } from 'react';
import NavFooter from './components/NavFooter';
import './components/NavFooter.css';


function App() {
  const [recipeData, setRecipesData] = useState(null);


  // let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`

  let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=1d94b5d4f7d448edad529369faf06ed0&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true&intolerances=gluten`;

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

    <div className="wrapper">
      <header><img src="https://i.ibb.co/hFhc0y0/WCS-Project-2.png" alt="" className="logo" /></header>
      <SearchInput recipeData={recipeData} />

      <footer>
        <NavFooter />
      </footer>

    </div >


  );
}

export default App;

