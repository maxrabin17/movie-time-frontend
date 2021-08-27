import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Errors from './Errors'


const Login = ({ errors, handleUserLoginAndSignup }) => {
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
        fetch('/login', config)
            .then(res => res.json())
            .then(data => handleUserLoginAndSignup(data))
            errors ? history.push('/login') : history.push('/wishes')
    }

    return (
        <div>
            <Form onSubmit={ handleSubmit } className="form">
            <h1>Log In!</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter Username" onChange={ handleChange }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter Password" onChange={ handleChange }/>
                </Form.Group>
                <Button variant="outline-success" type="submit">
                    Log in
                </Button>
            </Form>
            <Errors errors={errors}/>
        </div>
    )
}

export default Login