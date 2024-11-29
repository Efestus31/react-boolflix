import { useMovieContext } from '../context/DataContext';
import { FaStar, FaRegStar } from '../../node_modules/react-icons/fa';

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

    // Funzione per calcolare le stelle
    const getStarRating = (voteAverage) => {
        // Converti il voto da 1-10 a 1-5 (arrotondando per eccesso)
        const rating = Math.ceil(voteAverage / 2);  // Dividi per 2 per ridurre la scala a 5
        return rating;
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
                            <img src={`https://image.tmdb.org/t/p/w342/` + item.poster_path} alt="" />
                            <p><strong>Titolo Originale:</strong> {item.original_title || item.original_name}</p>
                            <p><strong>Lingua:</strong> <img src={getFlagUrl(item.original_language)} alt="flag" width="30" height="20" /></p>
                            <p><strong>Voto:</strong> </p>
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index}>
                                    {/* Mostra una stella piena se l'indice è minore del rating */}
                                    {index < getStarRating(item.vote_average) ? (
                                        <FaStar />
                                    ) : (
                                        <FaRegStar />
                                    )}
                                </span>
                            ))}
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