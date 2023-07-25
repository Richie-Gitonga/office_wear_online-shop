import React, { useState } from 'react'
import Stripe from "stripe";
import Navbar from './../Components/Navbar';
//stripe 5uCB8QZpjddt6QA

const stripe = new Stripe("pk_test_51NXhGcIx0wqGfvPvnNxChlIa0NYuTnG0n206ynQ4gzYE1wb1ikm66bNNziCpiQEJ11GzAyikiMei2tjv9eTllm5J00mp4tGcCZ")

const Checkout = (totalPrice) => {
    const [location, setLocation] = useState("")
    const [PaymentMethod, setPaymentMethod] = useState("")
    
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value)
    }


    const handlePaymentSubmit = async (event) => {
        event.preventDefault();
    try {
        //create a payment intent with Stripe API
        const response = await stripe.paymentIntents.create({
            amount: totalPrice,
            currency: 'usd',
            payment_method_types:['card']
        });
        if (error) {
            console.error('Payment Failed:',error.message)
        } else {
            //Payment succceded
            console.log('Payment Succeeded: ', paymentIntent)
            //add additional functionality e.g update orders page, show success message
        }
    }
    catch (error) {
        console.error("Error processing payment: ", error);
    }
}
  return (
   <div>
    <Navbar/>
    <h2>Checkout</h2>
    <form onSubmit={handlePaymentSubmit}></form>
    <label>Location:
        <input type='text' value={location} onChange={handleLocationChange}/>
    </label>
    <br />
    <label>Payment Method
        <select value={PaymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">--select payment method--</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Paypal">Paypal</option>
            <option value="M-pesa paybill">M-pesa Paybill</option>
        </select>
    </label>
   </div>
  )
}

export default Checkout;