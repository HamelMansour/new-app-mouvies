import './movie-card.css'
import {Card} from "@material-ui/core"
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Swal from "sweetalert2";
import API from "../../api/api";
import {useHistory} from 'react-router-dom'


const MovieCard =(props)=> {
    const router = useHistory()
    const {movie}= props
    const [value, setValue] = React.useState(movie.rating)
    const URI = 'http://localhost:3001/'
    const remove = () => {
        Swal.fire({
            title: "Are you sure to delete this movie?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!",
            closeOnConfirm: false,
            closeOnCancel: false
        })
            .then(ok => {
                if (ok.isConfirmed) {
                    API.post('/delete', {_id: movie._id})
                        .then(o => {
                            Swal.fire('', '', 'success').then(l => {
                                router.go(0)
                            })
                        })
                        .catch(err => {
                            Swal.fire('', '', 'error')
                        })
                }
            })
    }
    return (
        <Card  className= {'h-card'}>
            <div className= {'img-film'}>
                <img src={URI+ movie.poster} />
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
            <span onClick={remove} style={{fontSize: 20, cursor: "pointer"}}>X</span>

        </Card>
    )
}
export default MovieCard