import './movie-card.css'
import {Card} from "@material-ui/core"
import filmImg from "../../assets/images/img3.jpg"
import React from 'react';
import Rating from '@material-ui/lab/Rating';


const MovieCard =(props)=> {
    const {movie}= props
    const [value, setValue] = React.useState(movie.rating)

    return (
        <Card  className= {'h-card'}>
            <div className= {'img-film'}>
                <img src={movie.posteurl} />
                </div>
                <div className={'info-film'}>
                <span className={'info-title'}>{movie.title} </span>
                <span className={'info-description'}>{movie.description} </span>
            </div>
            <div className={'rating'}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </div>
            

        </Card>
    )
}
export default MovieCard