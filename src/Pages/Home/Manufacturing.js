import React from 'react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
    return (
        <div class="hero min-h-screen" style={{"backgroundImage": "url(https://www.entertales.com/wp-content/uploads/carmanufacturers-7.jpg)"}}>
            <div class="hero-overlay bg-opacity-90 bg-gray-500"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md text-white">
                    <h1 class="mb-5 text-5xl font-bold">Lets wait no more...</h1>
                    <p class="mb-5">Start by logging in. Your Information is fully secured with us. We highly encourage your coperation in building and growing our business.</p>
                    <Link to='/login' class="btn btn-outline">Login Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Manufacturing;