import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
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
import CheckoutForm from '../Stripe/StripeButton/StripeCheckout';

const ELEMENTS_OPTIONS = {
    fonts: [
      {
        cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
  };

const stripePromise = loadStripe("pk_test_51IgbDWHiy8J2sZTXxRgCLN9pONmD8I8ABcvEhjWHFWSRO8EWPVyxXbWoanjMDCmf2oPTmwbAe2AjyhMjI1pjuHB600sgLVpUyr");

const CampDescription = props => {
    const { pathname } = useLocation();
    
    const dispatch = useDispatch();
    const onAuthRedirect = () => dispatch({ type:'AUTH_REDIRECT', link: pathname })

    const onButtonClickHandler = () => {
        onAuthRedirect();
        props.history.push('/auth');
    }

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
             <div className='camp-desc--image'>
                <ArrowIcon width="25px" height="25px" className='camp-desc--image__icon' onClick = { () => props.history.push('/camps') }/>
                <img src= { imageName } alt = 'camp' width='100%' height='100%' />
            </div>
            <div className='container'>
                <div className='line'></div>
                <h2 className='camp-desc--title text-center'>{ details.name }</h2>
                <div className='camp-desc--content'>
                    <p className='camp-desc--content__text'>{ details.description }</p>
                    <div className='camp-desc--content__details'>
                        <p className='camp-desc--content__details--text'>Location: { details.location }</p>
                        <p className='camp-desc--content__details--text'>Duration: { details.duration }</p>
                        <p className='camp-desc--content__details--text'>Price: ${ details.price } </p>
                        { !isAuthenticated && <button onClick = { onButtonClickHandler }>Sign In to Book</button>  }
                    </div>
                </div>
                { isAuthenticated && (
                    <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                        <CheckoutForm email = { userEmail } price = { details.price }/>
                    </Elements>
                ) }
            </div>
        </section>
    )
}


export default (React.memo(CampDescription));