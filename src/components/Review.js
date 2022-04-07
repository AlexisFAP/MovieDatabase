import React from 'react';

import './Review.css'

function Review(props) {
  return <div className='box-review'>
    <div className='text-box-container-review'>
        <div className='text-box-review'><u className='text-box-subtitle-review'>Author:</u> {props.review.author}</div>
        <div className='text-box-review'><u className='text-box-subtitle-review'>Content:</u> {props.review.content}</div>
        <div className='text-box-review'><u className='text-box-subtitle-review'>Date:</u> {props.review.created_at}</div>
        <div className='text-box-review'><u className='text-box-subtitle-review'>Url:</u> {props.review.url}</div>
    </div>
  </div>
}

export default Review;
