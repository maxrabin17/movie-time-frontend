import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AddWatchLater from './AddWatchLater';

const Movies = ({ movies, handleWatchLater }) => {
        
    return (
        <>
                {movies.map((movie) =>
                <div className = "image-container col m-3">
                        <img id = "image" src={movie.Poster} alt=""></img>
                        <div onClick={() => handleWatchLater(movie)} className="hover-effect">
                            <AddWatchLater />
                        </div>
                </div>)}
            </>
    )
}

export default Movies