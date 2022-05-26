import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({pd}) => {

    const {name, price, img, stock, _id, minOrder, description} = pd

    return (
        <div className="flex flex-col max-w-sm m-2 transition duration-300 bg-white rounded shadow-sm hover:shadow">
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
                        {description}
                    </p>
                    <p className='text-sm font-bold my-2'>Minimum Order Quantity: {minOrder}</p>
                    <div className="mt-1 mb-4 mr-1 text-xl font-bold ">
                       Price: ${price}
                    </div>
                </div>
                <Link
                    to={`/purchase/${_id}`}
                    className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary hover:bg-primary focus:shadow-outline focus:outline-none `}
                >
                    Purchase Now 
                </Link>
            </div>
        </div>
    );
};

export default ProductsCard;