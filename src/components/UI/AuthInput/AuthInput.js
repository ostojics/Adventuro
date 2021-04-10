import React, { Fragment } from 'react';
import './AuthInput.scss';

const authInput = props => {

    return (
        <Fragment>
            <label className='AuthLabel'>{ props.label }</label>
            <input
            className = 'AuthInput' 
            name = { props.name }
            type={ props.type } 
            placeholder = { props.placeholder } 
            value = { props.value } 
            onChange = { props.changed }/>
        </Fragment>
    )
}

export default authInput;