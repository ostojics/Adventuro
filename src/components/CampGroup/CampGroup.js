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
                    imageName = { camp.image }
                    location = { camp.location }
                    clicked = { props.clicked }
                    onCampClick = { () => props.onCampClick({
                        name: camp.name,
                        description: camp.description,
                        location: camp.location,
                        duration: camp.duration,
                        price: camp.price,
                        image: camp.image
                    }) }
                    />
                }) }
            </div>
        </div>
    )
}

export default React.memo(campGroup);