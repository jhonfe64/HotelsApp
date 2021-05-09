import logo from './logo.svg';
import styled from  'styled-components';
import './App.css';
import Container from './elements/Container';
import Jumbotron from './components/Jumbotron';
import Filters from './components/Filters';
import Results from './components/Results';
import {FilterContextProvider} from './states/FilterContext';

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <FilterContextProvider>
        <Filters />
        <Results />
      </FilterContextProvider>
    </div>
  );
}

export default App;