import { useState } from 'react';
import Filter from '../../component/filter/filter';
import MovieListe from '../../component/movie-list/movie-liste';
import Navbar from '../../component/navbar/navbar';
import F01 from '../../assets/images/img1.jpg'
import F02 from '../../assets/images/img2.jpg'
import F03 from '../../assets/images/img3.jpg'
import F04 from '../../assets/images/img4.png'

const movieList =[
  {
    title: 'movie 01',
    description: 'movie description 01',
    rating: 4,
    posteurl: F01
  },{
    title: 'movie 02',
    description: 'movie description 02',
    rating: 2,
    posteurl:F02
  },{
    title: 'movie 03',
    description: 'movie description 03',
    rating: 5,
    posteurl:F03
  },{
    title: 'movie 04',
    description: 'movie description 04',
    rating: 3,
    posteurl:F04
  }
]
const Movie = ()=> {
  const[movies,setMovies]= useState(movieList)
  return (
    <>
    <Navbar/>
    <Filter movies={movies} setMovies={setMovies}
                    moviesList={movieList}/>
    <MovieListe movies={movies} />
    </>
  );
}

export default Movie;
