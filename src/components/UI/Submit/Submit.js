import React from 'react';
import './Submit.scss';


const submit = props => (
    <button type='submit' className={ props.disabled ? 'Submit-disabled' : 'Submit' } disabled = { props.disabled }>Submit</button>
)

export default submit;