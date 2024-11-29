import { useMovieContext } from '../context/DataContext';

export default function SearchHeader() {


    // Usa il contesto per ottenere e modificare gli stati
    const { query, setQuery, handleSearch } = useMovieContext();


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };


    return (
        <>

            <h1>Movie & TV Show Search</h1>
            {/* Barra di ricerca */}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Cerca un film o una serie..."
            />
            <button onClick={handleSearch}>Cerca</button>
        </>
    )
}
