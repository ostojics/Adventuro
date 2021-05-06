import React from 'react';
import './ErrorMessage.scss';

const errorMessage = props => {

    let errorMessage;
    switch(props.error) {
        case 'EMAIL_NOT_FOUND':
            errorMessage = 'Email not found';
            break;
        case 'INVALID_PASSWORD':
            errorMessage = 'Invalid password';
            break;
        case 'INVALID_EMAIL':
            errorMessage = 'Invalid email';
            break;
        case 'USER_DISABLED':
            errorMessage = 'This account has been disabled by the administrator';
            break;
        default:
            errorMessage = 'Error';
            break;
    }

    return (
        <p className='errorMessage'>{ errorMessage }</p>
    )
}

export default errorMessage;