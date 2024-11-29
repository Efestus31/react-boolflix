import { createContext, useState, useContext } from 'react';

// Crea il contesto
const MovieContext = createContext();

// Provider del contesto
export const MovieProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Funzione per gestire la ricerca
    const handleSearch = () => {
        if (!query) return;

        setLoading(true); // Inizia a caricare
        //fetch per i film
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=25537c8de642fea142d0dc97f37e7add&query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                const movies = data.results;

                // Fetch per le serie TV
                fetch(`https://api.themoviedb.org/3/search/tv?api_key=25537c8de642fea142d0dc97f37e7add&language=it_IT&query=${encodeURIComponent(query)}`)
                    .then(response => response.json())
                    .then(data => {
                        const tvShows = data.results;
                        // Combina i risultati di film e serie TV
                        setResults([...movies, ...tvShows]);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error fetching TV shows:', error);
                        setLoading(false);
                    });
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setLoading(false);
            });
    };



    return (
        <MovieContext.Provider value={{ query, setQuery, results, loading, handleSearch }}>
            {children}
        </MovieContext.Provider>
    );
};

// Custom hook per usare il contesto
export const useMovieContext = () => {
    return useContext(MovieContext);
};