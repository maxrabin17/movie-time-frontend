import React from 'react'
import {Card, Button} from 'react-bootstrap'

const CardFront = ({ movie, handleRemoveWatchLater, setCardBody }) => {
    
    const handleClick = () => {
        setCardBody(false)
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.comment ? movie.comment : null}
                    </Card.Text>
                    <Card.Link onClick={handleClick} href="#" id="card">{movie.comment ? "Edit Note" : "Add Note"}</Card.Link>
                    <br />
                    <br />
                    <Button id={movie.id} onClick={handleRemoveWatchLater} variant="success">Watched!</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardFront
