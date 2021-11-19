import './App.css';
import { useEffect, useContext } from 'react';
import { Switch, Route, useLocation, Link } from 'react-router-dom';
import SearchInput from './components/SearchInput';
import Recipes from './components/Recipes';
import RecipeInformation from './components/RecipeInformation';
import Favorites from './components/Favorites';
import NavFooter from './components/NavFooter';
import Home from './components/Home';
import Header from './components/atoms/Header';
import axios from 'axios';
import { nanoid } from 'nanoid';
import FavHandlerContext from './components/context/favHandler';

function App() {

  /* all Data is stored in a context to be accessable globally */
  const { recipeData, setRecipesData } = useContext(FavHandlerContext);

  let location = useLocation();

/* Function to returns steady and unique id */
  const addIdToArrayOfObjects = (array) => {
    return array.map(element => ({
      ...element,
      id: nanoid()  // a function that returns an unique id. Can be nanoid() since it's gonna run only once
    }))
  }


  useEffect(() => {
    const source = axios.CancelToken.source();

    axios

      .get("https://api.spoonacular.com/recipes/complexSearch?apiKey=14a6c274a3c145b7a6b898948168891f&diet=vegan&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&tags=diet=vegan&number=50&limitLicense=true", {
        cancelToken: source.token
      })

      .then((res) => res.data)

      .then((data) => addIdToArrayOfObjects(data.results))

      .then((data) => {
        setRecipesData(data);
        console.log(data);
      })

      .catch((err) => {
        console.error(err);
      });

    return () => {
      source.cancel("Component got unmounted");
    };

  }, [setRecipesData])

/* Using Routes and the Switch to create a Single Page Application (SPA) navigation structure to render specific components */
  return (

    <div className="App">
      <Header>
        <Link to="/"><img className="logo" src="https://i.ibb.co/RQqZ1d6/Screenshot-2021-11-11-at-23-11-32.png" alt="" /></Link>
      </Header>

      <SearchInput
        recipeData={recipeData}
        pathname={location.pathname}
      />


      <div className="content">


        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Recipes">
              <Recipes />
          </Route>

          <Route path="/Favorites">
            <Favorites />
          </Route>

          <Route exact path={"/Recipes/:id"}>
              <RecipeInformation />
          </Route>

        </Switch>

      </div >
      <NavFooter  />
    </div >

  );
}

export default App;


