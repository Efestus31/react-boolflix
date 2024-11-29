import { MovieProvider } from './context/DataContext';
import MovieDisplay from './components/movieDisplay';
import SearchHeader from './components/SearchHeader';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <MovieProvider>
      <SearchHeader />
      <MovieDisplay />
    </MovieProvider >
  );
}

export default App;