
import React, { Fragment } from 'react';
import './Button.scss';

const button = props => {

    return (
        <Fragment>
            <button className = { props.type } onClick = { props.click }>{ props.children }</button>
        </Fragment>
    )
}

export default button;