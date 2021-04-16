import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = props => {
    const priceForStripe = props.price * 100;
    const publishableKey = 'pk_test_51IgbDWHiy8J2sZTXxRgCLN9pONmD8I8ABcvEhjWHFWSRO8EWPVyxXbWoanjMDCmf2oPTmwbAe2AjyhMjI1pjuHB600sgLVpUyr';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label = 'Book Now'
            name = 'Adventuro Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/WHA.svg'
            description = { `Your total is $${props.price}` }
            amount = { priceForStripe }
            panelLabel = 'Book Now'
            token = {onToken}
            stripeKey = { publishableKey }
            email = { props.email }
       />
    )
}

export default stripeCheckoutButton;