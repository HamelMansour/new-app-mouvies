import MovieCard from "../movie-card/movie-card"
import './movie-liste.css'

const MovieListe =(props)=> {
    const{movies}=props
    return (
        <div className={'h-container'}>
            {movies.map(dd=> <MovieCard movie={dd} />)}
            
        </div>
    )
}
export default MovieListe