import React from 'react'
import {Card, Button} from 'react-bootstrap'

const CardBody = ({ movie, handleRemoveWatchLater, setCardBody }) => {
    
    const handleClick = () => {
        setCardBody(false)
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Card.Link onClick={handleClick} href="#" id="card">Add Comment</Card.Link>
                    <br />
                    <br />
                    <Button id={movie.id} onClick={handleRemoveWatchLater} variant="success">Watched!</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardBody
