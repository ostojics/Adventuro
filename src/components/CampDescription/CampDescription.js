import React from 'react';
import { connect } from 'react-redux';
import './CampDescription.scss';

import * as actions from '../../store/actions/index';

import camp1 from '../../images/camp1.jpg';
import camp2 from '../../images/camp2.jpg';
import kayak1 from '../../images/kayak1.jpg';
import kayak2 from '../../images/kayak2.jpg';
import climb1 from '../../images/climb1.jpg';
import climb2 from '../../images/climb2.jpg';
import ride1 from '../../images/ride1.jpg';
import ride2 from '../../images/ride2.jpg';
import { ReactComponent as ArrowIcon} from '../../icons/arrow.svg';
import StripeCheckoutButton from '../Stripe/StripeButton/StripeButton';

const CampDescription = props => {

    let imageName = null;

    switch(props.details.image) {
        case 'camp1':
            imageName = camp1;
            break;
        case 'camp2':
            imageName = camp2;
            break;
        case 'climb1':
            imageName = climb1;
            break;
        case 'climb2':
            imageName = climb2;
            break;
        case 'kayak1':
            imageName = kayak1;
            break;
        case 'kayak2':
            imageName = kayak2;
            break;
        case 'ride1':
            imageName = ride1;
            break;
        case 'ride2':
            imageName = ride2;
            break;
        default: 
            imageName = camp1;
            break;
    }

    return (
        <section className='camp-desc'>
            <div className='container'>
                <div className='camp-desc--image'>
                    <ArrowIcon className='camp-desc--image__icon' onClick = { () => props.history.goBack() }/>
                    <img src= { imageName } alt = 'camp' width='100%' height='100%' />
                </div>
                <div className='line'></div>
                <h2 className='camp-desc--title text-center'>{ props.details.name }</h2>
                <div className='camp-desc--content'>
                    <p>{ props.details.description }</p>
                    <div className='camp-desc--content__details'>
                        <p>Location: { props.details.location }</p>
                        <p>Duration: { props.details.duration }</p>
                        <p>Price: ${ props.details.price } </p>
                        { props.isAuthenticated ? (
                            <StripeCheckoutButton price = { props.details.price } email = { props.userEmail }/>
                        ) : (
                            <button onClick = { () => props.history.push('/auth') }>Sign In to Book</button>
                        ) }
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        details: state.campDtls.campDetails,
        loading: state.book.loading,
        success: state.book.success,
        isAuthenticated: state.auth.token !== null,
        userEmail: state.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBookHandler: (bookingData) => dispatch(actions.book(bookingData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampDescription);