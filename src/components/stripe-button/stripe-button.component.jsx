import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_MXHB0fZe8Ka9KP3WoDMHzY9f00Lrq0WDlb';

    const onToken = token => {
        console.log(token);
        alert('Payment Succeful!');
    };

    return (
      <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />  
    )
}

export default StripeCheckoutButton;