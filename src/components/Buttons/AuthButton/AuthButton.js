import React from 'react';
import { StyledAuthButton } from '../../StyledComponents/StyledComponents';

const authButton = props => {

    return (
        <StyledAuthButton type='submit'  disabled = { props.disabled }>
            { props.children }
        </StyledAuthButton>
    )
}

export default authButton;