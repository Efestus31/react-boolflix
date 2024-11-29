
import { useMovieContext } from '../context/DataContext';

const MovieDisplay = () => {
    const { results, loading } = useMovieContext();

    // Funzione per ottenere la URL della bandiera
    const getFlagUrl = (languageCode) => {
        const flagMap = {
            "en": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
            "it": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
            "es": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        };
        return flagMap[languageCode] || "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
    };

    return (
        <div>
            {/* Se stiamo caricando, mostra un messaggio */}
            {loading && <p>Caricamento in corso...</p>}

            {/* Mostra i risultati della ricerca */}
            <div>
                {results.length > 0 ? (
                    results.map((item) => (
                        <div key={item.id}>
                            <h3>{item.title || item.name}</h3>
                            <p><strong>Titolo Originale:</strong> {item.original_title || item.original_name}</p>
                            <p><strong>Lingua:</strong> <img src={getFlagUrl(item.original_language)} alt="flag" width="30" height="20" /></p>
                            <p><strong>Voto:</strong> {item.vote_average}</p>
                            <p><strong>Tipo:</strong> {item.media_type === "movie" ? "Film" : "Serie TV"}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p>Nessun risultato trovato</p>
                )}
            </div>
        </div>
    );
};

export default MovieDisplay;