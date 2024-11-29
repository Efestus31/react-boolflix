import { useMovieContext } from '../context/DataContext';

export default function SearchHeader() {


    // Usa il contesto per ottenere e modificare gli stati
    const { query, setQuery, handleSearch } = useMovieContext();


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };


    return (
        <>
            <header className='bg-dark d-flex justify-content-between align-items-center p-3'>
                {/* Logo */}
                <div className="logo-container">
                    <img
                        src="https://fontmeme.com/permalink/241129/35a1c37012861df4a2d992c899d110d8.png"
                        alt="Movie Logo"
                        style={{ maxHeight: '50px' }} // Aggiungi un limite alla dimensione del logo
                    />
                </div>


                {/* Barra di ricerca */}
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Cerca un film o una serie..."
                    />
                    <button onClick={handleSearch}>Cerca</button>

                </div>


            </header>
        </>
    )
}
