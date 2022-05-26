import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyItemsRow from './MyItemsRow';
import axiosPrivate from '../../API/axiosPrivate';
import { useQuery } from 'react-query';

const MyItems = () => {

    const [user, loading] = useAuthState(auth)

    const {data: myOrders, isLoading, refetch} = useQuery(['myOrders', user], () =>
        axiosPrivate.get(`http://localhost:5000/purchase?email=${user.email}`)
    )


    if (loading || isLoading) return <Loading></Loading>

    return (
        <div className='w-full'>
            <h1 className='text-center font-semibold text-xl mb-2'>My Items</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Order Amount</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.data.map((od, index) => <MyItemsRow 
                            index={index} 
                            key={od._id} 
                            od={od} 
                            refetch={refetch}></MyItemsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;