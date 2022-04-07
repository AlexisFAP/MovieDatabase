import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Reviews from "./Reviews";

import '../App.css'
import './Movie.css'

function SpecificMovie() {
    let { specificMovie } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${specificMovie}?api_key=bce5299a79631aebbe89221f1c2ca561&language=en-US`
    const [movie, setMovie] = useState();
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setMovie(responseJSON)
    }

    const url2 = `https://api.themoviedb.org/3/movie/${specificMovie}/reviews?api_key=bce5299a79631aebbe89221f1c2ca561&language=en-US&page=1`
    const [reviews, setReviews] = useState();
    const fetchApiReview = async () => {
      const response = await fetch(url2)
      const responseJSON = await response.json()
      setReviews(responseJSON.results)
    }

    useEffect(() => {
      fetchApi()
      fetchApiReview()
    }, [])

    return <div>
        <h2 style={{textAlign:'center'}}>Movie Detail</h2>
        {!movie ? <div className='text'> Loading...</div> : 
        <div className="container">
            <div className='box'>
                <div className='text-box-container'>
                    <div className='text-box'><u className='text-box-subtitle'>Title:</u> {movie.title}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Overview:</u> {movie.overview}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Release Date:</u> {movie.release_date}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.vote_average}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.homepage}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.original_language}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.original_title}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.popularity}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.revenue}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.runtime}</div>
                    <div className='text-box'><u className='text-box-subtitle'>Vote Average:</u> {movie.status}</div>
                </div>
                <img className='img-box' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path}/>
            </div>
        </div>
        }
        {!reviews ? <div className='text'> Loading...</div> : <Reviews reviews={reviews}/>}
    </div>
}

export default SpecificMovie