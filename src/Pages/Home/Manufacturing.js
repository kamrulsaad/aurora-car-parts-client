import React from 'react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
    return (
        <div className="hero min-h-screen" style={{"backgroundImage": "url(https://www.entertales.com/wp-content/uploads/carmanufacturers-7.jpg)"}}>
            <div className="hero-overlay bg-opacity-90 bg-gray-500"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Lets wait no more...</h1>
                    <p className="mb-5">Start by logging in. Your Information is fully secured with us. We highly encourage your coperation in building and growing our business.</p>
                    <Link to='/login' className="btn btn-outline">Login Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Manufacturing;