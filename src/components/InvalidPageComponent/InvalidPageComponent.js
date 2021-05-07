import React from 'react';
import './InvalidPageComponent.scss';
import { ReactComponent as Error404 } from '../../icons/404.svg';

const InvalidPageComponent = props => (
    <div className = "InvalidPageContainer">
        <Error404 className = 'InvalidPageContainer-icon'/>
        <button className = 'InvalidPageContainer-button' onClick = { () => props.history.goBack() }>Go Back</button>
    </div>
)

export default InvalidPageComponent;