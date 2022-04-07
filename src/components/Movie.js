import React from 'react';
import {useNavigate} from 'react-router-dom';

import './Movie.css'

function Movie(props) {
  const navigate = useNavigate()
  return <div className='box' onClick={() => navigate(`/specific-movie/${props.movie.id}`)}>
    <div className='text-box-container'>
        <div className='text-box'><u className='text-box-subtitle'>Title:</u> {props.movie.title}</div>
        <div className='text-box'><u className='text-box-subtitle'>Overview:</u> {props.movie.overview}</div>
        <div className='text-box'><u className='text-box-subtitle'>Release Date:</u> {props.movie.release_date}</div>
        <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {props.movie.vote_average}</div>
    </div>
    <img className='img-box' src={'https://image.tmdb.org/t/p/w500'+props.movie.poster_path}/>
  </div>
}

export default Movie;
