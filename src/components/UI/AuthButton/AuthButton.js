import React from 'react';
import './AuthButton.scss';

const authButton = props => {

    return (
        <button 
        type='submit' 
        className={ props.disabled ? 'AuthBtnDisabled' : 'AuthBtn' } 
        disabled = { props.disabled }>
            { props.children }
        </button>
    )
}

export default authButton;