import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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

    const dispatch = useDispatch();
    const onBookHandler = (bookingData) => dispatch(actions.book(bookingData));

    const details = useSelector(state => {
        return state.campDtls.campDetails
    })

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null
    })

    const userEmail = useSelector(state => {
        return state.auth.email
    })

    let imageName = null;

    switch(details.image) {
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
                <h2 className='camp-desc--title text-center'>{ details.name }</h2>
                <div className='camp-desc--content'>
                    <p>{ details.description }</p>
                    <div className='camp-desc--content__details'>
                        <p>Location: { details.location }</p>
                        <p>Duration: { details.duration }</p>
                        <p>Price: ${ details.price } </p>
                        { isAuthenticated ? (
                            <StripeCheckoutButton price = { details.price } email = { userEmail }/>
                        ) : (
                            <button onClick = { () => props.history.push('/auth') }>Sign In to Book</button>
                        ) }
                    </div>
                </div>
            </div>
        </section>
    )
}


export default (React.memo(CampDescription));