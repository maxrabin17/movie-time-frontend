import React from 'react'
import RemoveWatchLater from './RemoveWatchLater'

const WatchLater = ({ movies, handleWatchLater, watchLaterComp, setWatchLater }) => {
    // const WatchLaterComp = watchLaterComp

    const handleRemoveWatchLater = (event) => {
        let config = {
            method: 'DELETE'
        }
        // debugger;
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
            <div className = "image-container col m-3">
                    <img id = "image" src={movie.poster} alt=""></img>
                    <div id={ movie.id } onClick={handleRemoveWatchLater} className="hover-effect">
                        <RemoveWatchLater movie={ movie }/>
                    </div>
            </div>)}
        </>
    )
}

export default WatchLater
