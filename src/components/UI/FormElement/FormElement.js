import React, { Fragment } from 'react';
import './FormElement.scss';

const formElement = props => {

    let element = null;
    switch(props.elementType) {
        case 'input':
            element = (
                    <input 
                    type="text" 
                    onChange = { props.changed } 
                    className="Input" 
                    id = { props.id } 
                    name = { props.id } 
                    placeholder = { props.placeholder }
                    value = { props.value } />
            );
            break;
        case 'textarea':
            element = (
                    <textarea 
                    autoComplete="off" 
                    autoCorrect="off" 
                    autoCapitalize="off"  
                    spellCheck="false" 
                    type="text" 
                    onChange = { props.changed } 
                    className="Textarea" 
                    id = { props.id } 
                    name = { props.name }
                    value = { props.value } />
            )
            break;
        default:
            console.log('error');
            break;
    }

    return (
        <Fragment>
            <label className="Label">{ props.label }</label>
            { element }
        </Fragment>
    )
}

export default formElement;