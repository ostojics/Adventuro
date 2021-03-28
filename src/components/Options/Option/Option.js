
import React, { Component } from 'react';
import styled from 'styled-components';
import './Option.scss';
import {ReactComponent as KayakIcon} from '../../../icons/kayak.svg';
import {ReactComponent as CampIcon} from '../../../icons/tent.svg';
import {ReactComponent as BikeIcon} from '../../../icons/road-bike.svg';
import {ReactComponent as MountainIcon} from '../../../icons/mountains.svg';



class Option extends Component {
    state = {
        clicked: false
    }

    optionCardStyleHandler = () => {
        const currentState = this.state.clicked; 
        this.setState({clicked: !currentState})
    }


    render() {

    let campIcon = null;

    switch(this.props.title) {
        case('Camping'):
            campIcon = <CampIcon className = { 'Icon' }/>
            break;
        case('Climbing'):
            campIcon = <MountainIcon className = { 'Icon' }/>
            break;
        case('Riding'):
            campIcon = <BikeIcon className = { 'Icon' }/>
            break;
        case('Kayaking'):
            campIcon = <KayakIcon className = { 'Icon' }/>
            break;
        default:
            campIcon = <CampIcon className = { 'Icon' }/>
            break;
    }

    const StyledOptionCard = styled.div`
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

        return (
            <div className = { 'option' }>
                <StyledOptionCard clicked = { this.state.clicked } onClick = { this.optionCardStyleHandler }>
                    { campIcon }
                </StyledOptionCard>
                <p className = { 'option-text' }>{ this.props.title }</p>
            </div>
        )
    }    
}

export default Option;