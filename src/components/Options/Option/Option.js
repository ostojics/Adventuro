
import React, { useState } from 'react';
import { StyledOptionCard } from '../../StyledComponents/StyledComponents';
import './Option.scss';
import {ReactComponent as KayakIcon} from '../../../icons/kayak.svg';
import {ReactComponent as CampIcon} from '../../../icons/tent.svg';
import {ReactComponent as BikeIcon} from '../../../icons/road-bike.svg';
import {ReactComponent as MountainIcon} from '../../../icons/mountains.svg';



const Option = props => {
    const [clicked, setClicked] = useState(false);

    let campIcon = null;

    switch(props.title) {
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

    return (
        <div className = { 'option' }>
            <div onClick = { (!clicked ? () => props.selected(props.title) : () => props.deselected(props.title)) }>
                <StyledOptionCard clicked = { clicked } onClick = { () => setClicked(prevClickedState => !prevClickedState) }>
                    { campIcon }
                </StyledOptionCard>
            </div>
            <p className = { 'option-text' }>{ props.title }</p>
        </div>
    )
       
}
 
export default Option;