import React, {useState, useEffect} from "react";

import Movies from "./Movies";

function Favorite(){
    const url = `https://api.themoviedb.org/3/account/e28a7f3822ea7b8f6827dbd8e6ee5199/favorite/movies?api_key=bce5299a79631aebbe89221f1c2ca561&language=en-US&sort_by=created_at.asc&page=1`
    const [movies, setMovies] = useState();
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setMovies(responseJSON.results)
        console.log(responseJSON);
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return <div>
        <h1 style={title}>Favorite Movies</h1>
        <div style={container}>
            {!movies ? <div className='text'> Loading...</div> : <Movies movies={movies}/>}
        </div> 
    </div>
}

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
}

const title = {
    fontStyle: 'italic',
    fontSize: '33px',
    padding: '12px',
    margin: '12px',
    color: '#03045E',
    textAlign: 'center'
}

export default Favorite;