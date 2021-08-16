import React from 'react'
import StarRating from './StarRating';

const MovieCart = ({movie}) => {
    
    let {
        image,
        name,
        rating,
        date,
    }=movie;
    return (
        <div className="movie-card">
        <StarRating rate={rating}/>
        <img src={image}  alt="" />
        <h1>{name} </h1>
         <p>{date} </p>
         </div>
    )
}

export default MovieCart
