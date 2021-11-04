import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchInput from './components/SearchInput';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import NavFooter from './components/NavFooter';
import axios from 'axios';

function App() {
  const [recipeData, setRecipesData] = useState(null);
/* THIS NEEDS TO BE REVIEWED. IT'S BLOCKING THE DATA SOMEHOW

  const addIdToArrayOfObjects = (array) => {
		return array.map(element => ({
			...element,
			id: nanoid()  // a function that returns an unique id. Can be nanoid() since it's gonna run only once
		}))
	}
*/

  useEffect (() => { 
      const source = axios.CancelToken.source();

      axios

        .get("https://api.spoonacular.com/recipes/complexSearch?apiKey=1d94b5d4f7d448edad529369faf06ed0&diet=vegan&instructionsRequired=true&addRecipeInformation=true&addRecipeNutrition=true&sortDirection=asc&number=10&limitLicense=true&intolerances=gluten", {
          cancelToken: source.token
        })

      .then((res) => res.data)

      //.then((data) => addIdToArrayOfObjects(data))

      .then((data) => {
        setRecipesData(data.results);
        console.log(data.results);
      })

      .catch(() => {
        console.log('error');
      });

      return () => {
				source.cancel("Component got unmounted");
			}; 

  }, [])

            
   /* Using Routes and the Switch to create a Single Page Application (SPA) navigation structure to render specific components */
      return (

        <div className="App">
          <header><img src="https://i.ibb.co/hFhc0y0/WCS-Project-2.png" alt="" className="logo" /></header>
          <SearchInput recipeData={recipeData} />

          <div className="content">


             <Switch>

              <Route  exact path="/"><Recipes recipeData={recipeData} /></Route>
              
              <Route path="/Recipes"> <Recipes recipeData={recipeData} /> </Route>
              
              <Route path="/Favorites"> <Favorites /> </Route>
            
            </Switch>

          </div >
            <NavFooter />
          </div >

  );
}

export default App;

