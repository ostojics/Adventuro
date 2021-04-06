
import React from 'react';
import './Options.scss';
import Option from './Option/Option';

const Options = props => {
    
    return (
        <div className = { 'options' }>
            { props.options.map(option => {
                return <Option 
                title = { option.optionName } 
                key = { option.id } 
                selected = { props.optionSelected }
                deselected = { props.optionDeselected }/>
            }) }
        </div>
    )
}

export default Options;