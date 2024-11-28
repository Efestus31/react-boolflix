import { createContext, useState, useContext } from 'react';

// Crea il contesto
const MovieContext = createContext();

// Provider del contesto
export const MovieProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    // Funzione per gestire la ricerca
    const handleSearch = () => {
        if (!query) return;

        setLoading(true); // Inizia a caricare
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=25537c8de642fea142d0dc97f37e7add&query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results); // Aggiorna i risultati con i dati ricevuti
                setLoading(false); // Ferma il caricamento
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    return (
        <MovieContext.Provider value={{ query, setQuery, movies, loading, handleSearch }}>
            {children}
        </MovieContext.Provider>
    );
};

// Custom hook per usare il contesto
export const useMovieContext = () => {
    return useContext(MovieContext);
};