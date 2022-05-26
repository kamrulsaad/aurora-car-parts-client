import React from 'react';
import { useQuery } from 'react-query';
import axiosPrivate from '../../API/axiosPrivate';
import Loading from '../Shared/Loading'
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {

    const {data : orders, isLoading, refetch} = useQuery('orders', () => axiosPrivate.get('http://localhost:5000/orders'))

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
                            <th>Total Price</th>
                            <th>Order Amount</th>
                            <th>Customer</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            orders.data.map((pd, index) => <ManageOrderRow key={pd._id} pd={pd} refetch={refetch} index={index} ></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;