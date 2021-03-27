
import React, { Component } from 'react';
import './Options.scss';
import Option from './Option/Option';

const Options = props => {
    
    return (
        <div className = { 'options' }>
            { props.options.map(option => {
                return <Option title = { option.optionName } key = { option.id }/>
            }) }
        </div>
    )
}

export default Options;