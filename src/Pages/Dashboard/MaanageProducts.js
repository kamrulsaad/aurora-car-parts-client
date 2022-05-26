import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../API/axiosPrivate';
import Loading from '../Shared/Loading';
import ManageProductsRow from './ManageProductsRow';

const MaanageProducts = () => {

    const {data: products, isLoading, refetch} = useQuery('products', () => axiosPrivate.get('https://aurora-car-parts.herokuapp.com/products'))

    if(isLoading) return <Loading></Loading>

    return (
        <div className='w-full'>
            <h1 className='text-center font-semibold text-xl mb-2'>Manage Products</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>In Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.data.map((pd, index) => <ManageProductsRow key={pd._id} pd={pd} refetch={refetch} index={index} ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MaanageProducts;