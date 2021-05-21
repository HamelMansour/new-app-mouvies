import './movie-card.css'
import {Card} from "@material-ui/core"
const MovieCard =(props)=> {
    const {movie}= props
    return (
        <Card  className= {'h-card'}>
            <span>title:{movie.title} </span>
            <span>description:{movie.description} </span>
            <span>posterurl:{movie.posteurl} </span>
            <span>rating:{movie.rating} </span>
        </Card>
    )
}
export default MovieCard