import React, { Fragment } from 'react';
import './FormElement.scss';

const formElement = props => {

    const inputClasses = ['Input'];
    const textareaClasses = ['Textarea'];
    if(props.touched) {
        if(props.valid) {
            inputClasses.push('Input-Valid');
            textareaClasses.push('Textarea-Valid');
        } else {
            inputClasses.push('Input-Invalid');
            textareaClasses.push('Textarea-Invalid');
        }
    }

    let element = null;
    switch(props.elementType) {
        case 'input':
            element = (
                    <input 
                    type="text" 
                    onChange = { props.changed } 
                    className = { inputClasses.join(' ') }
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
                    className={ textareaClasses.join(' ') } 
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