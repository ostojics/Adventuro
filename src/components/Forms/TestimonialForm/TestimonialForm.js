import React from 'react';
import './TestimonialForm.scss'

const testimonialForm = props => {

    return (
        <form className='form'>
            <div className='form-group'>
                <label className="form-group--label">First Name</label>
                <input type="text" onChange = { props.changed } className="form-group--input" id="firstName" name="firstName" placeholder="John" />
            </div>
            <div className='form-group'>
                <label className="form-group--label">Last Name</label>
                <input type="text" onChange = { props.changed } className="form-group--input" id="lastName" name="lastName" placeholder="Smith" />
            </div>
            <div className='form-group'>
                <label className="form-group--label">Tell us about your experience</label>
                <textarea autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" onChange = { props.changed } className="form-group--input" id="review" name="review" />
            </div>
            <button type="submit" onSubmit={ props.submitted } className="form-submit">Submit</button>
        </form>
    )
}

export default testimonialForm;