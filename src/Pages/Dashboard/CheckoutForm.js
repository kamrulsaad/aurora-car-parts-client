import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import axiosPrivate from '../../API/axiosPrivate';

const CheckoutForm = ({ product }) => {

    const stripe = useStripe()
    const elements = useElements()
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { payableAmount, userName, email, _id } = product

    useEffect(() => {
        fetch("https://aurora-car-parts.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ payableAmount }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [payableAmount])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message || '')
            return
        } 

        setSuccess('')
        setCardError('')
        

        const { paymentIntent, intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );


        if (intentError) {
            setSuccess('')
            setCardError(intentError?.message)
        } else {
            setCardError('')
            setSuccess("Congratulations! Your payment has been completed")
            setTransactionId(paymentIntent.id)

            const payment = {
                product: _id,
                transactionId: paymentIntent.id
            }

            axiosPrivate.patch(`https://aurora-car-parts.herokuapp.com/purchase/${_id}`, payment)
            .then(data => console.log(data))

            // fetch(`https://doctors-portal-server-by-saad.herokuapp.com/booking/${_id}`, {
            //     method: 'PATCH', 
            //     headers: {
            //         "Content-Type": "application/json",
            //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            //     },
            //     body: JSON.stringify(payment)
            // })
            // .then(res => res.json())
            // .then(data => console.log(data))

        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm btn-success mt-2' type="submit" disabled={!stripe || !clientSecret || success}>
                Pay
            </button>
            {
                cardError && <span className='text-red-500 block text-sm'>{cardError}</span>
            }
            {
                success && <div>
                    <p className='text-green-500'>
                        {success}
                    </p>
                    <p>Your Transaction Id: <span className='font-bold'>{transactionId}</span> </p>
                </div>
            }
        </form>
    );
};

export default CheckoutForm;