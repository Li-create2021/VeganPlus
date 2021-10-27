import logo from './logo.svg';
import './App.css';
import './components/searchInput';
import SuggestionSection from './components/SuggestionSection'
import searchInput from './components/searchInput'

function App() {
  return (
    <div className="App">
      <SuggestionSection />
      <searchInput />
    </div>
  );
}

export default App;
