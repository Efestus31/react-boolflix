import { MovieProvider } from './context/DataContext';
import MovieDisplay from './components/movieDisplay';
import SearchHeader from './components/SearchHeader';

function App() {

  return (

    <MovieProvider>
      <SearchHeader />
      <MovieDisplay />
    </MovieProvider >
  );
}

export default App;