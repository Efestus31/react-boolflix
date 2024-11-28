import { MovieProvider, useMovieContext } from './context/DataContext';

function MovieSearch() {
  // Usa il contesto per ottenere e modificare gli stati
  const { query, setQuery, movies, loading, handleSearch } = useMovieContext();

  return (
    <div>
      <h1>Movie Search</h1>

      {/* Barra di ricerca */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca un film..."
      />
      <button onClick={handleSearch}>Cerca</button>

      {/* Se stiamo caricando, mostra un messaggio */}
      {loading && <p>Caricamento in corso...</p>}

      {/* Mostra i risultati della ricerca */}
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p><strong>Titolo Originale:</strong> {movie.original_title}</p>
              <p><strong>Lingua:</strong> {movie.original_language}</p>
              <p><strong>Voto:</strong> {movie.vote_average}</p>
            </div>
          ))
        ) : (
          !loading && <p>Nessun film trovato</p>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <MovieProvider>
      <MovieSearch />
    </MovieProvider>
  );
}

export default App;