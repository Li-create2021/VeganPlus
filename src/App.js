
import './components/searchInput';
import SuggestionSection from './components/SuggestionSection'
import RecipeData from './components/RecipeData';

function App(props) {
  return (
    <div className="App">
      <SuggestionSection recipeData={RecipeData}/>
    </div>
  );
}

export default App;
