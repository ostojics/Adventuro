import React from 'react';
import Camp from './Camp/Camp';
import './CampGroup.scss';
const campGroup = props => {

    return(
        <div className='campGroup'>
            <h3 className = 'campGroup-title'>{ props.title }</h3>
            <div className = 'campGroup-camps' >
                { props.camps.map(camp => {
                    return <Camp 
                    key = { camp.id }
                    avgReview = { camp.avgReview }
                    name = { camp.name }
                    shortDescription = { camp.shortDescription }
                    />
                }) }
            </div>
        </div>
    )
}

export default campGroup;