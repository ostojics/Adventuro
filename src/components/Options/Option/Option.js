
import React from 'react';
import './Option.scss';
import {ReactComponent as KayakIcon} from '../../../icons/kayak.svg';
import {ReactComponent as CampIcon} from '../../../icons/tent.svg';
import {ReactComponent as BikeIcon} from '../../../icons/road-bike.svg';
import {ReactComponent as MountainIcon} from '../../../icons/mountains.svg';

const Option = props => {

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
             <div className = { 'option-card' }>
                { campIcon }
            </div>
            <p className = { 'option-text' }>{ props.title }</p>
        </div>
    )
}

export default Option;