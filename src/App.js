import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import SearchInput from './components/SearchInput';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import NavFooter from './components/NavFooter';
import Home from './components/Home'
import axios from 'axios';
import { nanoid } from 'nanoid';


//import styled from "styled-components";


function App() {
  const [recipeData, setRecipesData] = useState(null);
  /* THIS NEEDS TO BE REVIEWED. IT'S BLOCKING THE DATA SOMEHOW*/
  let location = useLocation();
  const [isSearchValue, setIsSearchValue] = useState(true);
  const [hide, setHide] = useState(false);

  const addIdToArrayOfObjects = (array) => {
    return array.map(element => ({
      ...element,
      id: nanoid()  // a function that returns an unique id. Can be nanoid() since it's gonna run only once
    }))
  }


  useEffect(() => {
    const source = axios.CancelToken.source();

    axios

      .get("https://api.spoonacular.com/recipes/complexSearch?apiKey=37cd85a2df4c426685057ae2162f7e75&diet=vegan&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&tags=diet=vegan&number=6&limitLicense=true", {
        cancelToken: source.token
      })

      .then((res) => res.data)

      .then((data) => addIdToArrayOfObjects(data.results))

      .then((data) => {
        setRecipesData(data);
        console.log(data);
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
      <SearchInput
        recipeData={recipeData}
        isSearchValue={isSearchValue}
        setIsSearchValue={setIsSearchValue}
        pathname={location.pathname}
        setHide={setHide}
        hide={hide} />


      <div className="content">


        <Switch>

          <Route exact path="/">
            <Home
              recipeData={recipeData}
              setHide={setHide}
              hide={hide} />
          </Route>

          <Route path="/Recipes">
            {isSearchValue &&
              <Recipes
                recipeData={recipeData}
                setHide={setHide}
                hide={hide} />
            }
          </Route>

          <Route path="/Favorites"> <Favorites /> </Route>

        </Switch>

      </div >
      <NavFooter setHide={setHide} />
    </div >

  );
}

export default App;


