import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import './components/NavFooter.css'
import NavFooter from './components/NavFooter';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipeData, setRecipesData] = useState(null);

  useEffect (() => { 
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`
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
          
          <div className="content">

          <Switch>

            <Route  exact path="/"><SuggestionSection recipeData={RecipeData} /></Route>
            
            <Route path="/Recipes"> <Recipes recipeData={recipeData} /> </Route>
            
            <Route path="/Favorites"> <Favorites recipeData={recipeData} /> </Route>
           
           </Switch>

          </div >

          <NavFooter />

        </div >

  );
}

export default App;

