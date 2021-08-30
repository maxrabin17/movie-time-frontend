import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import AddWatchLater from './AddWatchLater';

const Movies = ({movies, watchLaterComp}) => {
    return (
            <>
                {movies.map((movie, index) =>
                <div className = "image-container col m-3">
                        <img id = "image" src={movie.Poster} alt=""></img>
                        <div className="hover-effect">
                            <AddWatchLater />
                        </div>
                </div>)}
            </>
    )
}

export default Movies