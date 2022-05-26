import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../API/axiosPrivate';
import ReviewCard from './ReviewCard';
import Loading from '../Shared/Loading'

const Testimonials = () => {

    const {data: reviews, isLoading} = useQuery('reviews', () => axiosPrivate.get('https://aurora-car-parts.herokuapp.com/reviews'))

    if(isLoading) return <Loading></Loading>

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-3xl my-4'>Our Previous Customers say,</h1>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
               {
                   reviews.data.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
               }
            </div>
        </div>
    );
};

export default Testimonials;