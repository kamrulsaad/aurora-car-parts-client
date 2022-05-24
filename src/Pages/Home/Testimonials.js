import React from 'react';
import ReviewCard from './ReviewCard';

const Testimonials = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className='text-3xl my-4'>Our Previoous Customers say,</h1>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <ReviewCard></ReviewCard>
               
            </div>
        </div>
    );
};

export default Testimonials;