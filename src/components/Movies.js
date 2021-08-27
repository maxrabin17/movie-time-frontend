import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Movies = ({movies}) => {
    return (
            <>
                {movies.map((movie, index) =>
                <div className = "col m-3">
                    <img src={movie.Poster} alt = ""></img>
                </div>)}
            </>
    )
}

export default Movies