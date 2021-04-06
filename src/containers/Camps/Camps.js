import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CampGroup from '../../components/CampGroup/CampGroup';
import Navbar from '../../components/Navbar/Navbar';
import './Camps.scss';

class Camp extends Component {
    

    campClickHandler = () => {
        this.props.history.push(`${this.props.match.path}/camp`);
    }

    render() {
        return (
            <Fragment>
                <section className='section-camps mb-4' >
                    <div className='container' >
                    <Navbar />
                        <h1 className='heading-primary-md text-center mt-6'>All of our camps</h1>
                        { this.props.campsData.map(campGroup => {
                            return <CampGroup 
                            title = { campGroup.title } 
                            key = { campGroup.id }
                            camps = { campGroup.camps }
                            clicked = { this.campClickHandler }
                            onCampClick = { this.props.onCampClick }
                            />
                        }) }
                    </div>
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {

    return {
        campsData: state.campSlc.campsData
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onCampClick: (campDetails) => dispatch({ type: 'CAMP_CLICK', payload: campDetails })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Camp);