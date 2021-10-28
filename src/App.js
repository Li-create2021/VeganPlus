import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState } from 'react';
import FilterData from './components/FilterData';
import Checkbox from './components/CheckBox';
import NavFooter from './components/NavFooter';


function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    
    <div className="App">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SuggestionSection recipeData={RecipeData}/>
    
      <footer>
      <NavFooter />
      </footer>
    
    </div>

    
  );
}

export default App;

