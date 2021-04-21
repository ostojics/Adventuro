import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CampGroup from '../../components/CampGroup/CampGroup';
import Navbar from '../../components/Navbar/Navbar';
import './Camps.scss';

const Camp = props => {
    
    const campClickHandler = () => {
        props.history.push(`${props.match.path}/camp`);
    }
    let renderData = null;
    if(props.categoriesAreSelected) {
        renderData = props.selectedCampsData;
    } else {
        renderData = props.initialCampsData;
    }

    return (
        <Fragment>
            <section className='section-camps mb-4' >
                <div className='container' >
                <Navbar />
                    { props.categoriesAreSelected 
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
                        onCampClick = { props.onCampClick }
                        />
                    }) }
                </div>
            </section>
        </Fragment>
    )
}

const mapStateToProps = state => {

    return {
        selectedCampsData: state.campSlc.campsRenderData,
        initialCampsData: state.campSlc.campsData,
        categoriesAreSelected: state.campSlc.categoriesSelected 
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onCampClick: (campDetails) => dispatch({ type: 'CAMP_CLICK', payload: campDetails })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Camp);