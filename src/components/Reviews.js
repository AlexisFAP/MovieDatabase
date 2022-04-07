import React,{Component} from "react";

import Review from "./Review";

class Reviews extends Component{
    
    render() {
        if(this.props.reviews.length == 0){
            return <div>
                <h2 style={title}>This movie doesn't have reviews.</h2>
            </div>
        }else{
            return <div>
                <h2 style={title}>REVIEWS</h2>
                <div style={container}>
                    {this.props.reviews.map( review => <Review review={review} key={review.id}/>)}
                </div> 
            </div>
        }
    }
}

const container = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}

const title = {
    padding: '12px',
    margin: '12px',
    color: 'black',
    textAlign: 'center',
    fontSize: '1.8em'
}

export default Reviews;