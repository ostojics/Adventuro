
import React, { Fragment } from 'react';
import './Button.scss';

const button = props => {

    return (
        <Fragment>
            <button className = { props.type }>{ props.children }</button>
        </Fragment>
    )
}

export default button;