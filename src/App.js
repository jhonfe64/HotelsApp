import './App.css';
import Jumbotron from './components/Jumbotron';
import Filters from './components/Filters';
import Results from './components/Results';
import {FilterContextProvider} from './states/FilterContext';
import {JumboScrollProvider} from './states/JumbotronContext';

function App() {
  return (
    <div className="App">
      <FilterContextProvider>
        <JumboScrollProvider>
          <Jumbotron/>
          <Filters />  
        <Results />
        </JumboScrollProvider>
      </FilterContextProvider>
    </div>
  );
}

export default App;