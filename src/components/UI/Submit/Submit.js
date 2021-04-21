import React from 'react';
import { StyledSubmit } from '../../StyledComponents/StyledComponents';


const submit = props => (
    <StyledSubmit type='submit' disabled = { props.disabled }>Submit</StyledSubmit>
)

export default submit;