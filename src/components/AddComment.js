import React from 'react'
import {Card} from 'react-bootstrap'

const AddComment = ({setCardBody}) => {

    const handleClick = () => {
        setCardBody(true)
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <h1>Hello</h1>
                <button onClick={handleClick}>on click</button>
            </Card>
        </>
    )
}

export default AddComment
