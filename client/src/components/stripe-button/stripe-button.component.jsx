import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_IJh6As206q8YuaEDqDXNzfaB00MHYMlFRG';

	const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
		  alert('Payment Successful');
    }).catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment. Please be sure you have entered your credit card correctly.');
    })
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='ecom site'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/up/d/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
