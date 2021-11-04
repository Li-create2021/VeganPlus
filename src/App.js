import SearchInput from './components/SearchInput';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import './components/NavFooter.css'
import NavFooter from './components/NavFooter';
import {nanoid} from 'nanoid';

function App() {
  const [recipeData, setRecipesData] = useState(null);

  const addIdToArrayOfObjects = (array) => {
		return array.map(element => ({
			...element,
			id: nanoid()  // a function that returns an unique id. Can be nanoid() since it's gonna run only once
		}))
	}


  useEffect (() => { 
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=1d94b5d4f7d448edad529369faf06ed0&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true&intolerances=gluten`
      
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
          <SearchInput recipeData={recipeData} addIdToArrayOfObjects={addIdToArrayOfObjects}/>

          <div className="content">

          <Switch>

            <Route  exact path="/"><Recipes recipeData={recipeData} /></Route>
            
            <Route path="/Recipes"> <Recipes recipeData={recipeData} /> </Route>
            
            <Route path="/Favorites"> <Favorites recipeData={recipeData} /> </Route>
           
           </Switch>

          </div >

          <NavFooter />

        </div >

  );
}

export default App;

