import React, {useState} from 'react'
import { Card, Form, Button} from 'react-bootstrap'

const AddComment = ({setCardBody, setWatchLater, movie, movies}) => {

    const [form, setForm] = useState({comment: movie.comment})

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(`/watch_laters/${movie.id}`, config)
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(data => setWatchLater(movies.map(singleMovie => singleMovie.id === movie.id ? data : singleMovie)))
        setCardBody(true)
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Form onSubmit={ handleSubmit } className="form">
                <h1>Add Note!</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Note</Form.Label>
                        <Form.Control name="comment" type="text" value={form.comment} onChange={ handleChange }/>
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                        {movie.comment ? "Edit Note" : "Add Note"}
                    </Button>
                </Form>
            </Card>
        </>
    )
}

export default AddComment
