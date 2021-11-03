import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState } from 'react';
import NavFooter from './components/NavFooter';
import './components/NavFooter.css'


function App() {
  const [searchValue, setSearchValue] = useState("");

  {/*let url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegan&intolerances=gluten,Dairy,Egg,Grain,Peanut,Sesame,Soy,Sulfite, Tree Nut,Wheat&equipment=&type=main course,breakfast,dinner,side dish,dessert,appetizer,salad,bread,soup,beverage,sauce,marinade,fingerfood,snack,drink&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&author=coffeebean&recipeBoxId=2468&sort=calories&apiKey=618396b0abe143398becafd2108f3164`;

  async function getRecipes() {
    let result = await Axios.get(url);

    console.log(result.data.hits);
  }*/}

  return (

    <div className="App">
      <header><img src="https://i.ibb.co/hFhc0y0/WCS-Project-2.png" alt="" className="logo" /></header>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SuggestionSection recipeData={RecipeData} />

      <footer>
        <NavFooter />
      </footer>

    </div >


  );
}

export default App;

