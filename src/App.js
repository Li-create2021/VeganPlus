import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState } from 'react';
import NavFooter from './components/NavFooter';



function App() {
  const [searchValue, setSearchValue] = useState("");

  return (

    <div className="App">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SuggestionSection recipeData={RecipeData} />

      <footer>
        <NavFooter />
      </footer>

    </div>


  );
}

export default App;

