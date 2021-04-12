import React, { Fragment } from 'react';
import './AuthInput.scss';

const authInput = props => {

    let errorClasses = ['AuthError'];
    let errorMessage = props.rule;

    if(props.touched) {
        if(props.valid) {
            errorClasses.push('AuthError-valid');
            errorMessage = props.validMsg;
        } else {
            errorClasses.push('AuthError-invalid');
            errorMessage = props.errorMsg;
        }
    }

    let label = null;
    let error = null;

    if(props.label !== null) {
        label = <label className='AuthLabel'>{ props.label }</label>
    }
    if(props.errorMsg !== null) {
        error = <div className={ errorClasses.join(' ') }>{ errorMessage }</div>
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
            { error }
        </Fragment>
    )
}

export default authInput;