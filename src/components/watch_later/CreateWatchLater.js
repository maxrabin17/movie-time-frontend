import React, { useState } from 'react'
import { Button, Form, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Errors from '../Errors'


const CreateWatchLater = ({ handleCreateWatchLater, errors, user }) => {
    const history = useHistory()
    const [form, setForm] = useState({})
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({title: form.title, poster: form.poster, user_id: user.id})
        }
        fetch('/watch_laters', config)
            .then(res => res.json())
            .then(data => handleCreateWatchLater(data))
        errors ? history.push('/movies/new') : history.push('/')
    }

    return (
        <div>
            <Card
                bg="secondary"
                text="white"
                style={{ width: '18rem' }}
                className="mb-2 form"
            >
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="form">
                        <h1>Add a Movie!</h1>
                        <Form.Group className="mb-3">
                            <Form.Label>Movie Name</Form.Label>
                            <Form.Control name="title" type="text" placeholder="Enter Movie Name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Poster URL</Form.Label>
                            <Form.Control name="poster" type="text" placeholder="Enter Poster URL" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Add Movie
                        </Button>
                    </Form>
                    <Errors errors={errors} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateWatchLater
