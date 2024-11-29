import { useMovieContext } from '../context/DataContext';

export default function SearchHeader() {


    // Usa il contesto per ottenere e modificare gli stati
    const { query, setQuery, handleSearch } = useMovieContext();


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };


    return (
        <>
            <header>
                <img src="https://fontmeme.com/permalink/241129/35a1c37012861df4a2d992c899d110d8.png" alt="" />
            </header>
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
