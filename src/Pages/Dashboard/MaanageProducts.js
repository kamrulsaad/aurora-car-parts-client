import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../API/axiosPrivate';
import Loading from '../Shared/Loading';
import ManageProductsRow from './ManageProductsRow';

const MaanageProducts = () => {

    const {data: products, isLoading, refetch} = useQuery('products', () => axiosPrivate.get('http://localhost:5000/products'))

    if(isLoading) return <Loading></Loading>

    return (
        <div className='w-full'>
            <h1 className='text-center font-semibold text-xl mb-2'>Manage Products</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Order Amount</th>
                            <th>Total Price</th>
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