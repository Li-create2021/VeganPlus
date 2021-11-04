import SearchInput from './components/SearchInput';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import './components/NavFooter.css'
import NavFooter from './components/NavFooter';
import FilterData from './components/FilterData';
import {nanoid} from 'nanoid';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipeData, setRecipesData] = useState(null);
  const [checkbox, setCheckbox] = useState(FilterData);

 // let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=618396b0abe143398becafd2108f3164&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true`

  useEffect (() => { 
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=37cd85a2df4c426685057ae2162f7e75&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true&intolerances=gluten`
      
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
          <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} checkbox={checkbox} setCheckbox={setCheckbox} />
          
          <div className="content">

          <Switch>

            <Route  exact path="/"><Recipes recipeData={recipeData} key={nanoid()} /></Route>
            
            <Route path="/Recipes"> <Recipes recipeData={recipeData} key={nanoid()} /> </Route>
            
            <Route path="/Favorites"> <Favorites recipeData={recipeData} key={nanoid()} /> </Route>
           
           </Switch>

          </div >

          <NavFooter />

        </div >

  );
}

export default App;

