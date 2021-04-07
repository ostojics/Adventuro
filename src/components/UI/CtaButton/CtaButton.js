
import React, { Fragment } from 'react';
import './CtaButton.scss';

const button = props => {

    return (
        <Fragment>
            <button 
            className = { props.type } 
            onClick = { props.click }
            disabled = { props.disabled }>{ props.children }</button>
        </Fragment>
    )
}

export default button;