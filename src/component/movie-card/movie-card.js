import './movie-card.css'
import {Card} from "@material-ui/core"
const MovieCard =(props)=> {
    const {movie}= props
    return (
        <Card  className= {'h-card'}>
            <span>title:{movie.titel} </span>
            <span>description:{movie.decription} </span>
            <span>posterurl:{movie.posterurl} </span>
            <span>rating:{movie.rating} </span>
        </Card>
    )
}
export default MovieCard