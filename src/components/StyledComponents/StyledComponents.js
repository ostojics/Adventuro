import styled from 'styled-components';

export const StyledOptionCard = styled.div`
    padding: 1.25em;
    background-color: #181F38;
    border-radius: 1.25em;
    border: ${props => props.clicked ? '5px solid #EF6E6F' : '5px solid transparent'};
    transition: all .2s;
    cursor: pointer;
    &:hover {
        border: ${props => props.clicked ? '5px solid #EF6E6F' : '5px solid #6573B5'};
    }
`;

export const StyledAuthButton = styled.button`
    padding: 0.9375rem 6.25rem;
    background-color: ${ props => props.disabled ? '#090b14' : '#181F38' };
    color: #F5F5F5;
    font-family: 'Mulish', 'sans-serif';
    font-weight: 400;
    border: 0;
    outline: 0;
    border-radius: 1.25rem;
    transition: all .2s;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid transparent;

    &:hover {
        ${props => props.disabled ? 'cursor:initial;' : 'cursor: pointer;'}
        ${props => props.disabled ? 'background-color: #090b14' : 'background-color: #151b31'};
        ${props => props.disabled ? 'border-bottom: 1px solid transparent' : 'border-bottom: 1px solid #F5F5F5'};
    }
`;

export const StyledSubmit = styled.button`
    font-family: 'Mulish', 'sans-serif';
    font-weight: 400;
    padding: 0.9375rem 1.875rem;
    font-size: 0.9375rem;
    background-color: ${props => props.disabled ? '#909fdb' : '#CAD1EE'};
    ${ props => props.disabled ? 'cursor: initial' : 'cursor: pointer;' }
    color: #181F38;
    border: 0;
    border-radius: 5px;
    transition: all .2s;

    &:hover {
        background-color: #909fdb;
    }
`