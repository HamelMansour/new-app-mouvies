import { useEffect, useState } from 'react';
import API from '../../api/api';
import Filter from '../../component/filter/filter';
import MovieListe from '../../component/movie-list/movie-liste';
import Navbar from '../../component/navbar/navbar';


const Movie = ()=> {
  const[movies,setMovies]= useState([])
  useEffect(() => {
    API.get('/all')
        .then(res => {
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}, [])
  return (
    <>
    <Navbar/>
    <Filter movies={movies} setMovies={setMovies}
                    moviesList={movies}/>
    <MovieListe movies={movies} />
    </>
  );
}

export default Movie;
