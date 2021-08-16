import React from 'react'
import MovieCart from './MovieCart'

const List = ({films}) => {
    return (
        <div className="movie-list">
        {films.map(
        (elmt) => <MovieCart movie={elmt}/>
     )}  
            
        </div>
    )
}

export default List
