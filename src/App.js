import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState } from 'react';
import FilterData from './components/FilterData';
import Checkbox from './components/CheckBox';

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SuggestionSection recipeData={RecipeData}/>
    </div>
  );
}

export default App;

