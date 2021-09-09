import React from 'react'
import WatchLaterCard from './WatchLaterCard'

const WatchLater = ({ movies, setWatchLater }) => {

    const handleRemoveWatchLater = (event) => {
        let config = {
            method: 'DELETE'
        }
        fetch(`/watch_laters/${event.target.id}`, config)
        setWatchLater(
            movies.filter(movie => {
                return movie.id !== parseInt(event.target.id) 
            })
        )
    }    

    return (
        <>
            {movies.map((movie) =>
            <div className = "watch_card col m-3">
                    <WatchLaterCard id={movie.id} movie={movie} movies={movies} handleRemoveWatchLater={handleRemoveWatchLater} setWatchLater={setWatchLater}/>
            </div>)}
        </>
    )
}

export default WatchLater
