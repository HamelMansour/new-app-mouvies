import { useState } from 'react';
import './App.css';
import Filter from './component/filter/filter';
import MovieListe from './component/movie-list/movie-liste';
const movieList =[
  {
    title: 'movie 01',
    description: 'movie description 01',
    rating: '01',
    posteurl:'url 01'
  },{
    title: 'movie 02',
    description: 'movie description 02',
    rating: '02',
    posteurl:'url 02'
  },{
    title: 'movie 03',
    description: 'movie description 03',
    rating: '03',
    posteurl:'url 03'
  },{
    title: 'movie 04',
    description: 'movie description 04',
    rating: '04',
    posteurl:'url 04'
  }
]
const App = ()=> {
  const[movies,setMovies]= useState(movieList)
  return (
    <>
    <Filter/>
    <MovieListe movies={movies} />
    </>
  );
}

export default App;
