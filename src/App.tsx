import './App.scss';
import { Home } from './components/HomeComponent/Home';
import { FilterProvider } from './context/context';

function App() {
  return (
    <FilterProvider>
      <div className="App">
        <Home />
      </div>
    </FilterProvider>

  );
}

export default App;
