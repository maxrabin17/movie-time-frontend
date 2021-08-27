import React from 'react'

const Movies = ({movies}) => {
    return (
        <>
            {movies.map((movie, index) =>
            <div>
                <img src={movie.Poster} alt = ""></img>
            </div>)}
        </>
    )
}

export default Movies