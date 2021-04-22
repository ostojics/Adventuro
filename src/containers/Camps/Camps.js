import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CampGroup from '../../components/CampGroup/CampGroup';
import Navbar from '../../components/Navbar/Navbar';
import './Camps.scss';

const Camp = props => {

    const dispatch = useDispatch();
    const onCampClick = (campDetails) => dispatch({ type: 'CAMP_CLICK', payload: campDetails });

    const selectedCampsData = useSelector(state => {
        return state.campSlc.campsRenderData
    })

    const initialCampsData = useSelector(state => {
        return state.campSlc.campsData
    })

    const categoriesAreSelected = useSelector(state => {
        return state.campSlc.categoriesSelected 
    })

    const campClickHandler = () => {
        props.history.push(`${props.match.path}/camp`);
    }
    
    let renderData = null;
    if(categoriesAreSelected) {
        renderData = selectedCampsData;
    } else {
        renderData = initialCampsData;
    }

    return (
        <Fragment>
            <section className='section-camps mb-4' >
                <div className='container' >
                <Navbar />
                    { categoriesAreSelected 
                    ? (
                        <h1 className='heading-primary-md text-center mt-6'>Recommended for you</h1>
                    ) 
                    : (
                        <h1 className='heading-primary-md text-center mt-6'>All of our camps</h1>
                    )  }
                    { renderData.map(campGroup => {
                        return <CampGroup 
                        title = { campGroup.title } 
                        key = { campGroup.id }
                        camps = { campGroup.camps }
                        clicked = { campClickHandler }
                        onCampClick = { onCampClick }
                        />
                    }) }
                </div>
            </section>
        </Fragment>
    )
}


export default (React.memo(Camp));