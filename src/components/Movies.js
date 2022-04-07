import React,{Component} from "react";

import Movie from "./Movie";

class Movies extends Component{
    render() {
        return <div>
            <h1 style={title}>HOME</h1>
            <div style={container}>
                {this.props.movies.map( movie => <Movie movie={movie} key={movie.id}/>)}
            </div> 
        </div>
    }
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

export default Movies;