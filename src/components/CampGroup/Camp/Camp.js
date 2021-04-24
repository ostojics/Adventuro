import React from 'react';
import camp1 from '../../../images/camp1.jpg';
import camp2 from '../../../images/camp2.jpg';
import climb1 from '../../../images/climb1.jpg';
import climb2 from '../../../images/climb2.jpg';
import kayak1 from '../../../images/kayak1.jpg';
import kayak2 from '../../../images/kayak2.jpg';
import ride1 from '../../../images/ride1.jpg';
import ride2 from '../../../images/ride2.jpg';
import './Camp.scss';

const Camp = props => {

    let image = null;

    switch(props.imageName) {
        case 'camp1':
            image = camp1;
            break;
        case 'camp2':
            image = camp2;
            break;
        case 'climb1':
            image = climb1;
            break;
        case 'climb2':
            image = climb2;
            break;
        case 'kayak1':
            image = kayak1;
            break;
        case 'kayak2':
            image = kayak2;
            break;
        case 'ride1':
            image = ride1;
            break;
        case 'ride2':
            image = ride2;
            break;
        default: 
            image = camp1;
            break;
    }

    return (
        <div onClick = { props.onCampClick }>
            <div className = 'camp' onClick = { props.clicked }>
                <div className = 'details'>
                    <h3><i className ="fas fa-map-marker-alt"></i> { props.location }</h3>
                </div>
                <img src = { image } width = '100%' height = '100%' />
            </div>
        </div>
    )
    
}

export default Camp;