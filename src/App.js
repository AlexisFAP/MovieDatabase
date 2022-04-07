import React, { useEffect, useState } from 'react';
import './App.css';

import Movies from './components/Movies';

function App() {
  const url = "https://api.themoviedb.org/3/movie/popular?api_key=bce5299a79631aebbe89221f1c2ca561&language=en-US&page=4"
  const [movies, setMovies] = useState();
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setMovies(responseJSON.results)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  
  return <div>
    {!movies ? <div className='text'> Loading...</div> : <Movies movies={movies}/>}
  </div>
}

export default App;
