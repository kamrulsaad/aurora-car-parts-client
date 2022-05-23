import React from 'react';

const ProductsCard = ({pd}) => {

    const {name, price, img, stock} = pd

    return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
                <img
                    src={img}
                    className="object-cover w-full h-full rounded-t"
                    alt="Plan"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                    <div className="text-lg font-semibold capitalize">{name}</div>
                    <p className='text-sm font-bold my-2'>In Stock: {stock} </p>
                    <p className="text-sm text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        doloremque.
                    </p>
                    <p className='text-sm font-bold my-2'>Minimum Order Quantity: 50</p>
                    <div className="mt-1 mb-4 mr-1 text-xl font-bold ">
                       Price: ${price}
                    </div>
                </div>
                <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary focus:shadow-outline focus:outline-none"
                >
                    Purchase Now 
                </a>
            </div>
        </div>
    );
};

export default ProductsCard;