import React, { StrictMode } from "react";
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9cm2Bc7XAZXWToON8Hdsywwjvh5Oljx6PgZExhjNE08pMZ8cSck4f7ngvAz76GlWXQTG3PTO0NGS6HBqqQSfdy00AmiMFSsA';
const ontoken = token => {
    console.log(token)
    alert('payment successful')
}
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your toatl is $${price}`}
            amount={priceForStripe}
            token={ontoken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;