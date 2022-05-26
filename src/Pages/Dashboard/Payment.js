import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L1r5FJbpxxK67O9UoEUiwunZwaeks8km5jZaxEeZnQiP3r8H41mri8pZCjSnCcT9kfB2x29xFvuT7rxEW4GHIgL005mZOEpIM');

const Payment = () => {

    const { id } = useParams()

    const [user, loading] = useAuthState(auth)

    const { data: product, isLoading } = useQuery(['payment', id], () => axiosPrivate.get(`https://aurora-car-parts.herokuapp.com/payment/${id}`))

    if(isLoading || loading) return <Loading></Loading>

    return (
        <div className="card sm:w-96 w-4/5 max-w-md bg-base-100 shadow-xl mt-10">
            <div className="card-body items-center text-center">
                <h1 className='text-center font-bold text-xl underline'>Order Details</h1>
                <h2 className="card-title capitalize">Hello <span className='text-accent font-bold'>{user.displayName},</span></h2>
                <p>Please pay for: <span className="capitalize">{product?.data?.product}</span></p>
                <p>Ordered Amount: <span className="capitalize">{product?.data?.purchaseAmount}</span></p>
                <p>Payable Amount: <span className="capitalize">${product?.data?.payableAmount}</span></p>
                <div className='w-full mt-3'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product.data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;