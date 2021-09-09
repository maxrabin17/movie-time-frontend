import React from 'react'
import WatchLater from './watch_later/WatchLater'
import { Alert, Button } from 'react-bootstrap'


const Home = ({ randomMovie, setRandomMovie, watchLater, setWatchLater }) => {
    
    const handleClick = () => {
        setRandomMovie(watchLater[Math.floor(Math.random() * watchLater.length)])
    }
    
    return (
        <div className='container-fluid movie-show'>
            <h1 className="heading" >Watch Later</h1>
            <div className="random">
                <h1>Not sure what to watch?</h1>
                <Button variant="dark" onClick={handleClick}>Click here for a Random Movie!</Button>
                <br />
                {randomMovie ? <Alert variant="success" id="rando">{`Try this movie: ${randomMovie.title}`}</Alert> : null}
            </div>
            <div className='row'>
                <WatchLater movies={watchLater} setWatchLater={setWatchLater} />
            </div>
        </div>
    )
}

export default Home
