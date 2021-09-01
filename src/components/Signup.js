import React from 'react'
import {Button, Form, Card} from 'react-bootstrap'
import Errors from './Errors'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'

const Signup = ({handleUserLoginAndSignup, errors}) => {
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
            body: JSON.stringify(form)
        }
        fetch('/users', config)
            .then(res => res.json())
            .then(data => handleUserLoginAndSignup(data))
        
            !errors ? history.push('/') : history.push('/signup')
    }

    return (
        <div>
            <Card
                bg="secondary"
                text="white"
                style={{ width: '18rem' }}
                className="mb-2 form"
            >
                <h1>Sign Up!</h1>
                <Card.Body>
                    <Form onSubmit={handleSubmit} className="form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" placeholder="Create Username" onChange={ handleChange }/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Create Password" onChange={ handleChange }/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control name="password_confirmation" type="password" placeholder="Confirm Password" onChange={ handleChange }/>
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                    <Errors errors={errors}/>    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Signup
