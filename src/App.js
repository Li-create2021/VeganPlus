import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState } from 'react';
import NavFooter from './components/NavFooter';
import './components/NavFooter.css'



function App() {
  const [searchValue, setSearchValue] = useState("");

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

