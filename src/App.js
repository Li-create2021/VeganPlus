
import './App.css';
import './components/SearchInput';
import SuggestionSection from './components/SuggestionSection'
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className="App">
      <SuggestionSection />
      {/*<SearchInputImg />*/}
      <SearchInput />
    </div>
  );
}

export default App;
