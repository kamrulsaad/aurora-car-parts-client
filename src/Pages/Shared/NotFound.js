import React from 'react';
import error from '../../assets/Pics/404-error-page.png'

const NotFound = () => {
    return (
        <div className='h-screen mt-16'>
            <img src={error} className='object-cover w-full lg:absolute h-80 lg:h-full' alt="" />
        </div>
    );
};

export default NotFound;