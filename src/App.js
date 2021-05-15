import './App.css';
import Jumbotron from './components/Jumbotron';
import Filters from './components/Filters';
import Results from './components/Results';
import {FilterContextProvider} from './states/FilterContext';
import {JumboScrollProvider} from './states/JumbotronContext';

function App() {
   const dates = new Date('2021-05-13');
  console.log(dates);
  return (
    <div className="App">
      <FilterContextProvider>
        <JumboScrollProvider>
          <Jumbotron/>
          <Filters />
        </JumboScrollProvider>  
        <Results />
      </FilterContextProvider>
    </div>
  );
}

export default App;