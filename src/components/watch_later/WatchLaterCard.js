import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import CardFront from './CardFront'
import AddComment from './AddComment'

const WatchLaterCard = ({ movie, handleRemoveWatchLater, setWatchLater, movies }) => {

    const [cardBody, setCardBody] = useState(true)

    const handleCardBody = (movie) => {
        return cardBody ? <CardFront id={movie.id} movie={movie} handleRemoveWatchLater={handleRemoveWatchLater} setCardBody={setCardBody} /> : <AddComment setCardBody={setCardBody} movie={movie} movies={movies} setWatchLater={setWatchLater}/>
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                {handleCardBody(movie)}
            </Card>
        </>
    )
}

export default WatchLaterCard
