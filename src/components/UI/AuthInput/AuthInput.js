import React, { Fragment } from 'react';
import './AuthInput.scss';

const authInput = props => {

    let label = null;

    if(props.label !== null) {
        label = <label className='AuthLabel'>{ props.label }</label>
    }

    return (
        <Fragment>
            { label }
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