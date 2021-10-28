import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';
import SearchInput from './components/SearchInput';
import { useState } from 'react';
import Filter from './components/Filter';

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <SuggestionSection recipeData={RecipeData} />
    </div>
  );
}

export default App;

