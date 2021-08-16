import React from 'react'
import ReactStars from "react-rating-stars-component";

const Search = ({handleSearch,handleRate}) => {
    const ratingChanged = (newRating) => {
        handleRate(newRating);
      };
    return (
        <div className="header-container" >
        <h1>Open Aire Cinema</h1>
        <div className="search-container">
        <input className="inp" type="text" placeholder="What do you wanna watch" onChange={(e)=>handleSearch(e.target.value)}/>
         <ReactStars count={5} size={25} onChange={ratingChanged}/>
        </div>
            
        </div>
    )
}

export default Search
