import { useMovieContext } from '../context/DataContext';
import MovieCard from './MovieCard';

const MovieDisplay = () => {
    const { loading } = useMovieContext();



    return (
        <div>
            {/* Se stiamo caricando, mostra un messaggio */}
            {loading && <p className='text-center'>Caricamento in corso...</p>}
            <h1 className='text-center'>Movie & TV Show Search</h1>
            {/* Mostra i risultati della ricerca */}
            <MovieCard />
        </div>
    );
};

export default MovieDisplay;