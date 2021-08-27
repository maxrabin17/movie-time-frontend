import React from 'react'

const Errors = ({ errors }) => {
    
    const renderErrors = () => {
        return errors.map(error => <li> { error } </li>)
    }

    return (
        <div className = "errors">
            {renderErrors()}
        </div>
    )
}

export default Errors